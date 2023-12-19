'use client'
import Link from "next/link"
import { Modal, ModalContent, ModalHeader, ModalBody, Input, Checkbox, ModalFooter, Button, useDisclosure } from "@nextui-org/react"
import { FormEvent, useState } from "react";
import { SignupModal } from "../JoinMailingList";

export default function SixHeroSection() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div className="flex flex-col min-h-screen p-4">
            <header className="px-4 lg:px-6 h-16 flex items-center">
                <Link className="flex items-center space-x-2" href="#">
                    <ClapperboardIcon className="h-6 w-6" />
                    <span className="text-2xl font-bold">the6ixCollective</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                        Projects
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                        About Us
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                        Contact
                    </Link>
                </nav>
            </header>
            <main className="flex-1">
                <section className="w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-4 lg:grid-cols-[1fr_400px] lg:gap-8 xl:grid-cols-[1fr_600px]">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <h1 className="block text-4xl wrap font-bold text-teal-100 tracking-tighter sm:text-5xl xl:text-6xl">
                                        <span>Welcome to</span>
                                        <span className="bg-gradient-to-r ml-2 from-teal-100 to-teal-200 text-teal-950 pt-[4px] mx-[4px] px-[4px] rounded-sm">
                                            _the6ixCollective
                                        </span>
                                    </h1>
                                    <p className="max-w-[600px] text-gray-500 md:text-lg dark:text-gray-400">
                                        We are a community of creatives passionate about production in the heart of Chicago. Join
                                        us in creating the extraordinary.
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    {/* <Link
                                        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-white hover:bg-gray-700"
                                        href="#"
                                        onClick={(e) => { e.preventDefault(); }}
                                    >
                                        Join Us
                                    </Link> */}
                                    <Button
                                        onPress={onOpen}
                                        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-white hover:bg-gray-700"
                                        color="primary">Join Us
                                    </Button>
                                    <Modal
                                        isOpen={isOpen}
                                        onOpenChange={onOpenChange}
                                        placement="top-center"
                                    >
                                        <SignupModal />
                                    </Modal>
                                    <Link
                                        className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium text-gray-500 hover:bg-gray-100"
                                        href="#"
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <JoinMailingListForm /> */}
            </main>
            <footer className="flex justify-center items-center h-16 px-4 lg:px-6 border-teal-100">
                <p className="text-sm text-gray-500 dark:text-gray-400">© the6ixCollective. All rights reserved.</p>
            </footer>
        </div>
    )
}

export function ClapperboardIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" />
            <path d="m6.2 5.3 3.1 3.9" />
            <path d="m12.4 3.4 3.1 4" />
            <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
        </svg>
    )
}
