import ThreeScene from "./_components/ThreeScene";
import localFont from "next/font/local"
import HeroSection from "./_components/six/HeroSection";
import SixHeader from "./_components/six/SixHeader";
// import { NavBar } from "./_components/NavagationBar";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
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

export default async function Home() {

  return (
    <main className={`flex flex-col items-center justify-center  ${founders.className} font-sans`} style={{ width: "100vw", height: "100vh" }}>
        <ThreeScene >
          <span className="max-w-max">
            <Navbar shouldHideOnScroll>
              <NavbarBrand>
                <SixLogo scale={0.4} />
                <p className="font-bold text-inherit">6ix Degree Collective</p>
              </NavbarBrand>
              <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                  <Link color="foreground" href="#">
                    Features
                  </Link>
                </NavbarItem>
                <NavbarItem isActive>
                  <Link href="#" aria-current="page">
                    Customers
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <Link color="foreground" href="#">
                    Integrations
                  </Link>
                </NavbarItem>
              </NavbarContent>
              <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                  <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                  <Button as={Link} color="primary" href="#" variant="flat">
                    Sign Up
                  </Button>
                </NavbarItem>
              </NavbarContent>
            </Navbar>
            <div className="grid min-h-[70vh] grid-cols-1 md:grid-cols-2 items-center"></div>
            {/* <SixHeader /> */}
            {/* <HeroSection /> */}
          </span>
        </ThreeScene>
    </main >
  );
}
