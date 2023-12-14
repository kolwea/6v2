import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const emailRouter = createTRPCRouter({
  sendEmail: publicProcedure
    .input(
      z.object({
        to: z.string(),
        from: z.string(),
        subject: z.string(),
        html: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      //Do something
      console.log(input);
      const response = await ctx.email.emails.send(input);
      console.log(response);
    }),
});
