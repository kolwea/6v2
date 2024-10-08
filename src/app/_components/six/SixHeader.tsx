'use client'
import { Dialog } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid"
import { useState } from "react"
import { SixLogo } from "../svgs/SixLogo"
import Link from "next/link"
import { ClapperboardIcon } from "./SixExampleHeroSection"

const NAV_ITEMS = [
    { name: 'Mission', href: '#' },
    { name: 'Values', href: '#' },
    { name: 'Team', href: '#' },
    { name: 'Events', href: '#' },
]

const SixHeader = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8 mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square" aria-label="Global">
            <div className="flex lg:flex-1 ">
                {/* <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">the6ixCollective</span>
                    <SixLogo scale={0.08} fill="#e6e6e6" />
                </a> */}
                <Link className="flex items-center space-x-2" href="#">
                    <ClapperboardIcon className="h-6 w-6" />
                    <span className="text-2xl font-bold">the6ixCollective</span>
                </Link>
            </div>
            <div className="flex lg:hidden">
                <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(true)}
                >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
                {NAV_ITEMS.map((item) => (
                    <a key={item.name} href={item.href} className="text-[24px] font-semibold leading-6 text-gray-100">
                        {item.name}
                    </a>
                ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <a href="#" className="text-sm font-semibold leading-6 text-gray-100">
                    Log in <span aria-hidden="true">&rarr;</span>
                </a>
            </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">the6ixCollective</span>
                        <SixLogo scale={0.08} fill="#e6e6e6" />
                    </a>
                    <button
                        type="button"
                        className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="space-y-2 py-6">
                            {NAV_ITEMS.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-100"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                        <div className="py-6">
                            <a
                                href="#"
                                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-100"
                            >
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
            </Dialog.Panel>
        </Dialog>
    </header>
}

export default SixHeader