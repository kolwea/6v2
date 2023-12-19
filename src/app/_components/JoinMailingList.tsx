"use client";

import { Input, ModalHeader, ModalBody, ModalFooter, Button, ModalContent } from "@nextui-org/react";
import { type FormEvent, useState } from "react";
import { api } from "~/trpc/react";



export const SignupModal = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const useJoinMailinglist = api.email.joinMailingList.useMutation();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        useJoinMailinglist.mutate({ name, email })
    }


    return (
        <ModalContent>
            {(onClose) => (
                <div>
                    <form onSubmit={handleSubmit}>
                        <ModalHeader className="flex flex-col gap-1">Join our newsletter</ModalHeader>
                        <ModalBody>
                            <Input
                                autoFocus
                                // endContent={
                                //     <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                // }
                                label="Name"
                                autoComplete="given-name"
                                type="text"
                                id="name"
                                key="name"
                                name="name"
                                placeholder="Enter your first name"
                                variant="bordered"
                                onChange={(m) => {
                                    setName(m.target.value);
                                }}
                            />
                            <Input
                                // endContent={
                                //     <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                // }
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
                            <Button color="danger" variant="flat" onPress={onClose}>
                                Close
                            </Button>
                            <Button color="primary" type="submit" onPress={onClose}>
                                Sign in
                            </Button>
                        </ModalFooter>
                    </form>
                </div>
            )}
        </ModalContent>
    );
}


