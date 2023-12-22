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
      return response;
    }),
  joinMailingList: publicProcedure
    .input(z.object({ name: z.string(), email: z.string().email() }))
    .mutation(async ({ ctx, input }) => {
      const res = await ctx.db.mailingListUser.upsert({
        where: { email: input.email },
        update: {},
        create: { name: input.name, email: input.email },
      });
      return res;
    }),
  getMailingList: publicProcedure
    .input(z.object({ count: z.number() }))
    .query(({ ctx, input }) => {
      console.log(input);
      return ctx.db.mailingListUser.findMany();
    }),
});
