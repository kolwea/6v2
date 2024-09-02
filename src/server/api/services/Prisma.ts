import { PrismaClient } from "@prisma/client";

import { env } from "~/env";

const globalForPrisma = globalThis as unknown as {
  client: PrismaClient | undefined;
};

export const prismaClient =
  globalForPrisma.client ??
  new PrismaClient({
    log:
      env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (env.NODE_ENV !== "production") globalForPrisma.client = prismaClient;
