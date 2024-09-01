import { z } from "zod";
import { env } from "~/env";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  createUser: publicProcedure
    .input(
      z.object({
        first_name: z.string(),
        last_name: z.string(),
        cellphone: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { data, error } = await ctx.supabaseClient.auth.signUp({
        phone: input.cellphone,
        password: "example-password",
        options: {
          channel: "sms",
          data: {
            first_name: input.first_name,
            last_name: input.last_name,
          },
        },
      });
    }),
  verificationCheck: publicProcedure
    .input(
      z.object({
        code: z.string().length(6),
        to: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const check = await ctx.twilioClient.verify.v2
        .services(env.TWILIO_SERVICE_ID)
        .verificationChecks.create(input);

      console.log(check);
      return check;
    }),
});
