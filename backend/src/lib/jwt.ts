import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET;

if (!jwtSecret) {
  throw new Error("JWT_SECRET is not set in environment");
}

export type JwtPayload = {
  sub: string;
  email: string;
  name?: string | null;
};

export function signAccessToken(payload: JwtPayload, expiresIn = "7d") {
  return jwt.sign(payload, jwtSecret, { expiresIn });
}

export function verifyAccessToken(token: string) {
  return jwt.verify(token, jwtSecret) as JwtPayload;
}
