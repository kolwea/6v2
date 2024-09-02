'use client'

import { Input, Button, Spacer, Radio, RadioGroup } from "@nextui-org/react"
import { SixLogo } from "../_components/svg/SixLogo"
import { type FormEvent, useCallback, useState } from "react"
import { api } from "~/trpc/react";
import { warn } from "console"

const BasicInfoForm = ({ onSubmitSuccess }: { onSubmitSuccess: () => void }) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [formIsLoading, setFormIsLoading] = useState(false);

    const onSignupWithUser = api.user.createUser.useMutation()

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setFormIsLoading(true)
        const res = onSignupWithUser.mutate({ firstName, lastName, cell: phoneNumber })
        console.log(res)
        onSubmitSuccess()
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="form row-auto w-screen space-y-5 px-8 col-span-1 block justify-center bg-red-200">
                <div className="w-[100%] flex justify-center">
                    <h1>Let's gather some basic information. This information will be used to build your initial profile.</h1>
                </div>
                <div className="w-[100%] flex justify-center">
                    <Input
                        isRequired
                        type="type"
                        label="First Name"
                        name="firstName"
                        onChange={(e) => setFirstName(e?.currentTarget.value)}
                        className="min-w-screen-xs max-w-screen-sm"
                    />
                </div>
                <div className="w-[100%] flex justify-center">
                    <Input
                        isRequired
                        type="type"
                        label="Last Name"
                        name="lastName"
                        onChange={(e) => setLastName(e?.currentTarget.value)}
                        className="min-w-xs max-w-screen-sm"
                    />
                </div>
                <div className="w-[100%] flex justify-center">
                    <Input
                        isRequired
                        type="number"
                        label="Cell"
                        name="cell"
                        onChange={(e) => setPhoneNumber(e?.currentTarget.value)}
                        className="min-w-xs max-w-screen-sm"
                    />
                </div>
                <div className="w-[100%] flex justify-center">
                    <Button disabled={formIsLoading} isLoading={formIsLoading} variant="shadow" color="primary" type="submit" className="w-[30%]" >
                        Next
                    </Button>
                </div>
            </div>
        </form>
    )
}

const VerificationForm = () => {
    return (
        <div className="form row-auto w-screen space-y-5 px-8 col-span-1 block justify-center bg-red-200">
            <div className="w-[100%] flex justify-center">
                <h1>A code has been sent to your mobile device. Enter it here to verify your identity</h1>
            </div>
            <div className="flex">
                <div className="inline-flex m-auto justify-center gap-5">
                    <div className="w-[100%] flex justify-center">
                        <Input
                            isRequired
                            type="number"
                            label="0"
                            name="0"
                            // onChange={(e) => setFirstName(e?.currentTarget.value)}
                            // defaultValue="Elon"
                            className="min-w-screen-xs max-w-screen-sm"
                        />
                    </div>
                    <div className="w-[100%] flex justify-center">
                        <Input
                            isRequired
                            type="number"
                            label="0"
                            name="0"
                            // onChange={(e) => setFirstName(e?.currentTarget.value)}
                            // defaultValue="Elon"
                            className="min-w-screen-xs max-w-screen-sm"
                        />
                    </div>
                    <div className="w-[100%] flex justify-center">
                        <Input
                            isRequired
                            type="number"
                            label="0"
                            name="0"
                            // onChange={(e) => setFirstName(e?.currentTarget.value)}
                            // defaultValue="Elon"
                            className="min-w-screen-xs max-w-screen-sm"
                        />
                    </div>
                    <div className="w-[30%] h-[50%] flex justify-center">
                        <Input
                            isRequired
                            type="number"
                            label="0"
                            name="0"
                            // onChange={(e) => setFirstName(e?.currentTarget.value)}
                            // defaultValue="Elon"
                            className="min-w-screen-xs max-w-screen-sm"
                        />
                    </div>
                    <div className="w-[100%] flex justify-center">
                        <Input
                            isRequired
                            type="number"
                            label="0"
                            name="0"
                            // onChange={(e) => setFirstName(e?.currentTarget.value)}
                            // defaultValue="Elon"
                            className="min-w-screen-xs max-w-screen-sm"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

type Page = "info" | "verify" | "actions"

export default function SignupPage({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    const [page, setPage] = useState("info" as Page)

    const onFormSubmitted = () => {
        setPage("verify");
    }

    return (
        <main>
            <section className="h-screen w-screen bg-white flex">
                <div className="w-screen top-10 flex bg-blue-200">
                    <div className="flex-row">
                        <div className="logoWrapper mx-4 flex justify-center my-8">
                            <SixLogo scale={0.2} fill="red" />
                        </div>
                        <Spacer className="my-10"></Spacer>
                        <div className="h-[300px]">
                            {page == "info" && <BasicInfoForm onSubmitSuccess={onFormSubmitted} />}
                            {page == "verify" && <VerificationForm />}
                            {page == "actions" && <></>}
                        </div>
                        <Spacer className="my-10"></Spacer>
                        <div className="m-4 flex justify-center my-10">
                            <RadioGroup
                                orientation="horizontal"
                                value={page}
                            >
                                <Radio value="info"></Radio>
                                <Radio value="verify"></Radio>
                                <Radio value="actions"></Radio>
                            </RadioGroup>
                        </div>
                    </div>
                </div>
                {children}
            </section>
        </main>
    )
}