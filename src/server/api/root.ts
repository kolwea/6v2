import { postRouter } from "~/server/api/routers/post";
import { createTRPCRouter } from "~/server/api/trpc";
import { emailRouter } from "./routers/email";
import { mfaRouter } from "./routers/mfa";
import { userRouter } from "./routers/user";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  email: emailRouter,
  mfa: mfaRouter,
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
