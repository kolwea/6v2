import ThreeScene from "./_components/ThreeScene";
import localFont from "next/font/local"
import HeroSection from "./_components/six/HeroSection";
import SixHeader from "./_components/six/SixHeader";
import { NavBar } from "./_components/NavagationBar";

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

  return (
    <main className={`flex flex-col items-center justify-center  ${founders.className} font-sans`}>
      <NavBar></NavBar>
      <section>
        <ThreeScene >
          <div className='absolute' style={{ width: "100vw" }} >
            {/* <SixHeader /> */}
            {/* <HeroSection /> */}
          </div>
        </ThreeScene>
      </section>
      <section>
        
      </section>

    </main >
  );
}
