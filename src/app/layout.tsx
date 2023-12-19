/* eslint-disable @typescript-eslint/unbound-method */
import "~/styles/globals.css";
import { cookies } from "next/headers";
import { TRPCReactProvider } from "~/trpc/react";
import { Providers } from "./providers";

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
