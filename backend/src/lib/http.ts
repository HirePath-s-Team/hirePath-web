import type { Request } from "express";

export function isSecureRequest(req: Request) {
  const forwardedProto = req.headers["x-forwarded-proto"];
  return forwardedProto === "https" || req.secure === true;
}
