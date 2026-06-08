import { Router } from "express";
import bcrypt from "bcrypt";
import { z } from "zod";
import { signAccessToken } from "../lib/jwt";
import { isSecureRequest } from "../lib/http";
import { prisma } from "../lib/prisma";
import { requireAuth, type AuthenticatedRequest } from "../middleware/auth";

const router = Router();

const registerSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1).optional(),
  password: z.string().min(8),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

router.post("/register", async (req, res) => {
  const parsed = registerSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "invalid_payload", details: parsed.error.flatten() });
  }

  const { email, name, password } = parsed.data;

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return res.status(409).json({ error: "email_in_use" });
  }

  const passwordHash = await bcrypt.hash(password, 12);
  const user = await prisma.user.create({
    data: {
      email,
      name: name ?? null,
      passwordHash,
      profile: { create: {} },
    },
  });

  const token = signAccessToken({ sub: user.id, email: user.email, name: user.name });
  const session = await prisma.userSession.create({
    data: { userId: user.id },
  });
  res.cookie("auth", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: isSecureRequest(req),
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
  res.cookie("session_id", session.id, {
    httpOnly: true,
    sameSite: "lax",
    secure: isSecureRequest(req),
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return res.status(201).json({
    user: { id: user.id, email: user.email, name: user.name },
  });
});

router.post("/login", async (req, res) => {
  const parsed = loginSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "invalid_payload", details: parsed.error.flatten() });
  }

  const { email, password } = parsed.data;
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || !user.passwordHash) {
    return res.status(401).json({ error: "invalid_credentials" });
  }

  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) {
    return res.status(401).json({ error: "invalid_credentials" });
  }

  const token = signAccessToken({ sub: user.id, email: user.email, name: user.name });
  const session = await prisma.userSession.create({
    data: { userId: user.id },
  });
  res.cookie("auth", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: isSecureRequest(req),
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
  res.cookie("session_id", session.id, {
    httpOnly: true,
    sameSite: "lax",
    secure: isSecureRequest(req),
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return res.json({ user: { id: user.id, email: user.email, name: user.name } });
});

router.post("/logout", async (req, res) => {
  const sessionId = req.cookies?.session_id;
  if (sessionId) {
    const session = await prisma.userSession.findUnique({ where: { id: sessionId } });
    if (session) {
      const durationMs = Date.now() - session.startedAt.getTime();
      const durationMinutes = Math.max(1, Math.round(durationMs / 60000));
      await prisma.userSession.update({
        where: { id: sessionId },
        data: { durationMinutes },
      });
    }
  }

  res.clearCookie("auth");
  res.clearCookie("session_id");
  return res.json({ ok: true });
});

router.get("/me", requireAuth, async (req: AuthenticatedRequest, res) => {
  if (!req.auth) {
    return res.status(401).json({ error: "unauthorized" });
  }

  const user = await prisma.user.findUnique({
    where: { id: req.auth.userId },
    select: { id: true, email: true, name: true },
  });

  if (!user) {
    return res.status(404).json({ error: "user_not_found" });
  }

  return res.json({ user });
});

export default router;
