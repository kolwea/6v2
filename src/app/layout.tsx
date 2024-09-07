/* eslint-disable @typescript-eslint/unbound-method */
import "~/styles/globals.css";
import { Providers } from "./providers";
import { TRPCReactProvider } from "~/trpc/react";
import { cookies } from "next/headers";

export const metadata = {
  title: "the6ixCollective",
  description: "The creative collective",
  icons: [{ rel: "icon", url: "/sixIcon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" className='dark'>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <body>
        <TRPCReactProvider cookies={cookies().toString()}>
          <Providers>
            {children}
          </Providers>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
