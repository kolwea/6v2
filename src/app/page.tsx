import localFont from "next/font/local"
import cityImage from '../../public/IMG_6040.jpg'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import { SixLogo } from "./_components/svg/SixLogo";
import Image from "next/image";
import { Roboto, Bebas_Neue } from 'next/font/google'


const founders = localFont({
  src: [
    {
      path: 'fonts/Founders_Grotesk/FoundersGrotesk-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    // {
    //   path: 'fonts/Founders_Grotesk/FoundersGrotesk-RegularItalic.otf',
    //   weight: '400',
    //   style: 'italic',
    // },
    // {
    //   path: '/fonts/Founders_Grotesk/FoundersGrotesk-Light.otf',
    //   weight: '400',
    //   style: 'light',
    // },
    // {
    //   path: '/fonts/Founders_Grotesk/FoundersGrotesk-Bold.otf',
    //   weight: '400',
    //   style: 'bold',
    // },

  ],
  variable: "--font-founders"
})

const founderLight = localFont({
  src: [
    {
      path: '/fonts/Founders_Grotesk/FoundersGrotesk-Light.otf',
      weight: '400',
      style: 'light',
    }
  ],
  variable: "--font-founders-light"
})

const roboto = Roboto({
  weight: ['100', '400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const bebas = Bebas_Neue({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

const SixNavbar = () => <Navbar maxWidth={"full"} className="fixed bg-transparent" isBlurred={false}>
  <NavbarBrand className="space-x-4 justify-start">
    <SixLogo scale={0.05} fill="white" />
    <p className={`font-medium text-inherit mt-1 text-xl ${roboto.className}`}>the6ixCollective</p>
  </NavbarBrand>
  <NavbarContent className={`hidden sm:flex gap-8 text-xl ${roboto.className} font-thin `} justify="center">
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
    <main className={`${founders.className} font-sans bg-white max-w-full`} >
      <SixNavbar />
      <Image
        className="rounded-bl-[100px] mt-[-30%] bg-white"
        src={cityImage}
        alt={"City Scape"}
        priority
      />
      <div className={`bg-white ${roboto.className} flex m-5 gap-4 text-black`}>
        <div className="w-[70%] bg-slate-300 text-[500%]">
          <div className="flex-row">
            <div>Creative Agency</div>
          </div>
          <div className="inline-flex gap-5">
            <div className="w-fit font-light"> Meets</div>
            <div className="w-fit"> Community</div>
          </div>
        </div>
        <div className="w-[30%] bg-slate-200">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nisl felis, porta sit amet luctus non, vestibulum a lacus. Pellentesque vel ligula nulla. Maecenas tempus congue nunc at rhoncus. Nulla imperdiet dui dui, id efficitur quam vulputate egestas. </p>
        </div>
      </div>
      {/* <div className="grid min-h-[70vh] grid-cols-1 md:grid-cols-2 items-center"></div> */}
      {/* <SixHeader /> */}
      {/* <HeroSection /> */}
    </main >
  );
}
