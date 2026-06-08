import "dotenv/config";
import bcrypt from "bcrypt";
import { prisma } from "./lib/prisma.js";

async function main() {
  const email = "test@prep.com";
  const password = "Test@1234";
  const name = "Test User";

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    console.log("Seed user already exists:", email);
    return;
  }

  const passwordHash = await bcrypt.hash(password, 12);
  await prisma.user.create({
    data: {
      email,
      name,
      passwordHash,
      profile: { create: {} },
    },
  });

  console.log("Seed user created:");
  console.log("  email:", email);
  console.log("  password:", password);
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
