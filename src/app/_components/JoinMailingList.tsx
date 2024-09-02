"use client";

import { Input, ModalHeader, ModalBody, ModalFooter, Button, ModalContent, Popover, PopoverTrigger, PopoverContent, Spinner } from "@nextui-org/react";
import { type FormEvent, useState } from "react";
import { api } from "~/trpc/react";
import { MailIcon } from "./svg/MailIcon";
import { LockIcon } from "./svg/LockIcon";

export const SignupModal = () => {
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

    //TODO - Update Popover to trigger on mailing list states.
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
                            <Popover key={"success"} placement="bottom" color={"success"}>
                                <PopoverTrigger>
                                    <Button className="w-full" color="primary" disabled={useJoinMailinglist.isLoading} type="submit">
                                        {useJoinMailinglist.isLoading ? <Spinner size="sm" /> : "Sign up"}
                                    </Button>
                                </PopoverTrigger>
                                {content}
                            </Popover>
                            {/* {useJoinMailinglist.error && <p>Something went wrong! {useJoinMailinglist.error.message}</p>} */}
                        </ModalFooter>
                    </form>
                </div>
            )}
        </ModalContent>
    );
}


