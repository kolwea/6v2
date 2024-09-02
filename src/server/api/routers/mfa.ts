import { z } from "zod";
import { env } from "~/env";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const mfaRouter = createTRPCRouter({
  createVerification: publicProcedure
    .input(
      z.object({
        channel: z.enum(["sms", "email"]),
        to: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const verification = await ctx.twilioClient.verify.v2
        .services(env.TWILIO_SERVICE_ID)
        .verifications.create({
          channel: input.channel,
          to: input.to,
        });
      console.log(verification);
      return verification;
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
      .verificationChecks.create(input)

      console.log(check)
      return check
    }),
});
