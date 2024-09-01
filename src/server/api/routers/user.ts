import { warn } from "console";
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
      })
      
      console.log(data)
      if(error){
        warn(error)
      }
      return data
    }),
});
