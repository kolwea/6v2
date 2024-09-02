import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  createUser: publicProcedure
    .input(
      z.object({
        firstName: z.string(),
        lastName: z.string(),
        cell: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const res = await ctx.supabaseClient.auth.signUp({
        phone: input.cell,
        password: "example-password",
        options: {
          channel: "sms",
          data: {
            first_name: input.firstName,
            last_name: input.lastName,
          },
        },
      })
      
      return res
    }),
});
