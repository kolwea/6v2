import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react"
import Link from "next/link"

export const NavBar = () => {
    return (<Navbar shouldHideOnScroll>
        <NavbarBrand>
            {/* <AcmeLogo /> */}
            <p className="font-bold text-inherit">6IX</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
                <Link color="foreground" href="#">
                    About
                </Link>
            </NavbarItem>
            <NavbarItem isActive>
                <Link href="#" aria-current="page">
                    Membership
                </Link>
            </NavbarItem>
            <NavbarItem>
                <Link color="foreground" href="#">
                    Events
                </Link>
            </NavbarItem>
            <NavbarItem>
                <Link color="foreground" href="#">
                    Blog
                </Link>
            </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
                <Link href="#">Login</Link>
            </NavbarItem>
            <NavbarItem>
                <Button as={Link} color="primary" href="#" variant="flat">
                    Join
                </Button>
            </NavbarItem>
        </NavbarContent>
    </Navbar>)
}