'use client'
import { useState } from "react";
import { Card, Input, Button, CardBody, CardHeader, Checkbox, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { api } from "~/trpc/react";

export default function MailingListForm() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    // const testEmail = { to: "kswof97@yahoo.com", from: "test@6ixchicago.com", subject: "Testing emails on click", html: "<h1>Empty body</h1>" }

    // const createPost = api.post.create.useMutation({
    //     onSuccess: () => {
    //         // router.refresh();
    //         setName("");
    //     },
    // });

    return (
        <>
            <Button
                onPress={onOpen}
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-white hover:bg-gray-700"
                color="primary">Open Modal
            </Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
                isDismissable={true}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
                            <ModalBody>
                                <Input
                                    autoFocus
                                    // endContent={
                                    //     <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    // }
                                    label="Email"
                                    placeholder="Enter your email"
                                    variant="bordered" />
                                <Input
                                    // endContent={
                                    //     <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    // }
                                    label="Password"
                                    placeholder="Enter your password"
                                    type="password"
                                    variant="bordered" />
                                <div className="flex py-2 px-1 justify-between">
                                    <Checkbox
                                        classNames={{
                                            label: "text-small",
                                        }}
                                    >
                                        Remember me
                                    </Checkbox>
                                    <Link color="primary" href="#" size="sm">
                                        Forgot password?
                                    </Link>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="flat" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Sign in
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal></>
    )
}

