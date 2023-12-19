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
      const response = await ctx.email.emails.send(input);
      console.log(response);
      return response;
    }),
  joinMailingList: publicProcedure
    .input(z.object({ name: z.string(), email: z.string().email() }))
    .query(async ({ ctx, input }) => {
      const res = await ctx.db.mailingListUser.findFirst({
        where: { email: input.email },
      });
      return res
    }),
});
