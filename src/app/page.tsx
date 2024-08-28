import ThreeScene from "./_components/ThreeScene";
import localFont from "next/font/local"
import HeroSection from "./_components/six/HeroSection";
import SixHeader from "./_components/six/SixHeader";
// import { NavBar } from "./_components/NavagationBar";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Image } from "@nextui-org/react";
import Link from "next/link";
import { SixLogo } from "./_components/svg/SixLogo";

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

const SixNavbar = () => <Navbar shouldHideOnScroll maxWidth={"full"}>
  <NavbarBrand className="space-x-4 justify-start">
    <SixLogo scale={0.05} />
    <p className="font-bold text-inherit mt-1 text-xl">the6ixCollective</p>
  </NavbarBrand>
  <NavbarContent className="hidden sm:flex gap-4" justify="center">
    <NavbarItem>
      <Link color="foreground" href="#">
        About
      </Link>
    </NavbarItem>
    <NavbarItem isActive>
      <Link href="#" aria-current="page">
        News
      </Link>
    </NavbarItem>
    <NavbarItem>
      <Link color="foreground" href="#">
        Events
      </Link>
    </NavbarItem>
    <NavbarItem>
      <Link color="foreground" href="#">
        Contact
      </Link>
    </NavbarItem>
  </NavbarContent>
</Navbar>

export default async function Home() {

  return (
    <main className={`${founders.className} font-sans`} >
      <div style={{ width: "100vw", height: "100vh" }}>
        <SixNavbar />
        <div className="content" style={{ width: "100vw", height: "100vh" }}>
          <Image
            width={300}
            alt="NextUI hero Image"
            src="https://github.com/kolwea/6v2/blob/development/public/IMG_6040.png"
          />
        </div>

      </div>
      {/* <div className="grid min-h-[70vh] grid-cols-1 md:grid-cols-2 items-center"></div> */}
      {/* <SixHeader /> */}
      {/* <HeroSection /> */}
    </main >
  );
}
