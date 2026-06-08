import type { Request, Response, NextFunction } from "express";
import { verifyAccessToken } from "../lib/jwt";

export type AuthenticatedRequest = Request & {
  auth?: {
    userId: string;
    email: string;
    name?: string | null;
  };
};

export function requireAuth(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const token = req.cookies?.auth;
  if (!token) {
    return res.status(401).json({ error: "unauthorized" });
  }

  try {
    const payload = verifyAccessToken(token);
    req.auth = {
      userId: payload.sub,
      email: payload.email,
      name: payload.name ?? null,
    };
    return next();
  } catch (error) {
    return res.status(401).json({ error: "invalid_token" });
  }
}
