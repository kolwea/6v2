import { env } from "~/env";
import twilio, { type Twilio } from "twilio"

const accountSid = env.TWILIO_ACCOUNT_SID
const authToken = env.TWILIO_AUTH_TOKEN

const globalForTwilio = globalThis as unknown as {
    client: Twilio | undefined;
};

export const mfa = globalForTwilio.client ?? twilio(accountSid, authToken);
