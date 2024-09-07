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
      });

      return res;
    }),
  signInUserOTP: publicProcedure
    .input(
      z.object({
        phoneNumber: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const response = await ctx.supabaseClient.auth.signInWithOtp({
        phone: input.phoneNumber,
      });

      console.log(response);
      return response;

      // const token = data.data.session;
      // const { access_token, refresh_token } = token;
    }),
  verifyOTP: publicProcedure
    .input(
      z.object({
        phone: z.string(),
        token: z.string().length(6),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const res = ctx.supabaseClient.auth.verifyOtp({
        phone: input.phone,
        token: input.token,
        type: "sms",
      });

      return res;
    }),
  getSession: publicProcedure.query(async ({ ctx }) => {
    const res = await ctx.supabaseClient.auth.getSession();
    return res;
  }),
});
