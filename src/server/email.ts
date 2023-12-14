import { Resend } from "resend";

import { env } from "~/env";

const globalForResend = globalThis as unknown as {
  resend: Resend | undefined;
};

export const email = globalForResend.resend ?? new Resend(env.RESEND_API_KEY);
