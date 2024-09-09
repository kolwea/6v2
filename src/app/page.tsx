import cityImage from '../../public/IMG_6040.jpg'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import { SixLogo } from "./_components/svg/SixLogo";
import Image from "next/image";
import { roboto, founders } from './fonts';


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
    <main className={`${founders.className} w-[100%] h-[100%] overflow-scroll font-sans bg-white max-w-full`} >
      <div className='' >
        <div className='m-4'>
          <SixNavbar />
        </div>
        <Image
          className="rounded-bl-[100px] mt-[-30%] bg-white"
          src={cityImage}
          alt={"City Scape"}
          priority
        />
        <div className={`bg-white ${roboto.className} w-[100%] flex m-6 gap-4 text-black`}>
          <div className=" justify-between">
            <div className="inline text-[700%] ">
              <div>Creative Agency</div>
              <div className="inline-flex gap-5">
                <div className="w-fit font-light"> Meets</div>
                <div className="w-fit"> Community</div>
              </div>
            </div>
            <div className="w-[40%] text-[200%] pl-20 m-auto ">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nisl felis, porta sit amet luctus non, vestibulum a lacus. Pellentesque vel ligula nulla. Maecenas tempus congue nunc at rhoncus. Nulla imperdiet dui dui, id efficitur quam vulputate egestas. </p>
            </div>
          </div>
        </div>
      </div>
    </main >
  );
}
