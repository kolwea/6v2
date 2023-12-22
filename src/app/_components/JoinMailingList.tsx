"use client";

import { Input, ModalHeader, ModalBody, ModalFooter, Button, ModalContent, Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { type FormEvent, useState } from "react";
import { api } from "~/trpc/react";
import { MailIcon } from "./svgs/MailIcon";
import { LockIcon } from "./svgs/LockIcon";
import { NextRouter, Router, useRouter } from "next/router";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { color } from "framer-motion";
import { content } from "tailwindcss/defaultTheme";

export const SignupModal = ({ router }: { router: AppRouterInstance }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const useJoinMailinglist = api.email.joinMailingList.useMutation();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        useJoinMailinglist.mutate({ name, email })
    }

    const content = (
        <PopoverContent>
            <div className="px-1 py-2">
                <div className="text-small font-bold">Success</div>
                <div className="text-tiny">You've been added to the mailing list. Welcome to the 6ix.</div>
            </div>
        </PopoverContent>
    );

    return (
        <ModalContent>
            {() => (
                <div>
                    <form onSubmit={handleSubmit}>
                        <ModalHeader className="flex flex-col gap-1">Join our newsletter</ModalHeader>
                        <ModalBody>
                            <Input
                                autoFocus
                                endContent={
                                    <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                }
                                label="Name"
                                autoComplete="given-name"
                                type="text"
                                id="name"
                                key="name"
                                name="name"
                                placeholder="Enter your name"
                                variant="bordered"
                                onChange={(m) => {
                                    setName(m.target.value);
                                }}
                            />
                            <Input
                                endContent={
                                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                }
                                label="Email"
                                autoComplete="email"
                                type="email"
                                id="email"
                                key="email"
                                name="email"
                                placeholder="Enter your email"
                                variant="bordered"
                                onChange={(m) => {
                                    setEmail(m.target.value);
                                }}
                            />
                        </ModalBody>

                        <ModalFooter>
                            <Popover key={"success"} placement="top" color={"success"}>
                                <PopoverTrigger>
                                    <Button className="w-full" color="primary" disabled={useJoinMailinglist.isLoading} type="submit">
                                        Sign up
                                    </Button>
                                </PopoverTrigger>
                                {content}
                            </Popover>
                        </ModalFooter>
                    </form>
                </div>
            )}
        </ModalContent>
    );
}


