import ThreeScene from "./_components/ThreeScene";
import localFont from "next/font/local"
import SixExampleHeroSection from "./_components/six/SixExampleHeroSection";
import { api } from "~/trpc/server";

const founders = localFont({
  src: [
    {
      path: 'fonts/Founders_Grotesk/FoundersGrotesk-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: 'fonts/Founders_Grotesk/FoundersGrotesk-RegularItalic.otf',
      weight: '400',
      style: 'italic',
    },
    // {
    //   path: '/fonts/Founders_Grotesk/FoundersGrotesk-Regular.otf',
    //   weight: '400',
    //   style: 'normal',
    // },
    // {
    //   path: '/fonts/Founders_Grotesk/FoundersGrotesk-Regular.otf',
    //   weight: '400',
    //   style: 'normal',
    // },
    // {
    //   path: '/fonts/Founders_Grotesk/FoundersGrotesk-Regular.otf',
    //   weight: '400',
    //   style: 'normal',
    // },
    // {
    //   path: './Roboto-Italic.woff2',
    //   weight: '400',
    //   style: 'italic',
    // },
    // {
    //   path: './Roboto-Bold.woff2',
    //   weight: '700',
    //   style: 'normal',
    // },
    // {
    //   path: './Roboto-BoldItalic.woff2',
    //   weight: '700',
    //   style: 'italic',
    // },
  ],
  variable: "--font-founders"
})

export default async function Home() {
  //! Test sending email via trpc api
  // const testEmail = { to: "kswof97@yahoo.com", from: "test@6ixchicago.com", subject: "Testing emails from resend", html: "<h1>Empty body</h1>" }
  // const sendEmail = api.email.sendEmail.mutate(testEmail)
  // console.log(sendEmail)

  return (
    <main className={`flex flex-col items-center justify-center  ${founders.className} font-sans`}>
      <ThreeScene >
        <div className='absolute' >
          <SixExampleHeroSection />
        </div>
      </ThreeScene>
    </main>
  );
}
