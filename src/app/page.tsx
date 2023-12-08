import ThreeScene from "./_components/ThreeScene";
import localFont from '@next/font/local'
import SixHeroSection from "./_components/six/SixHeroSection";
import SixHeader from "./_components/six/SixHeader";
import SixExampleHeroSection from "./_components/six/SixExampleHeroSection";

export const founders = localFont({
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
    <main className={`flex flex-col items-center justify-center ${founders.className} font-sans`}>
      <ThreeScene >
        <div className='absolute' style={{ width: "100vw" }}>
          <div className='opacity-50'>
            <SixHeader />
            {/* <SixHeroSection /> */}
            <SixExampleHeroSection />
          </div>
        </div>
      </ThreeScene>
    </main>
  );
}
