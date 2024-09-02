import { Resend } from "resend";
import { env } from "~/env";

const globalForResend = globalThis as unknown as {
  client: Resend | undefined;
};

export const resendClient = globalForResend.client ?? new Resend(env.RESEND_API_KEY);

if (env.NODE_ENV !== "production") globalForResend.client = resendClient;

