'use client'

import { Button, RadioGroup, Spacer, Radio } from "@nextui-org/react"
import { useMemo, useState, type FormEvent } from "react"
import type * as RPNInput from "react-phone-number-input";


import { api } from "~/trpc/react"
import { VerificationForm } from "./verify"
import { ArrowBigRight } from "lucide-react"
import { founders, roboto } from "../fonts"
import { PhoneInput } from "./components"
import { object } from "zod";

type Page = "info" | "verify" | "actions"

export default function BasicInfoForm() {
    const [page, setPage] = useState("info" as Page)
    const [phoneNumber, setPhoneNumber] = useState("" as RPNInput.Value)

    const onUserSignIn = api.user.signInUserOTP.useMutation()
    const { isLoading } = onUserSignIn

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (phoneNumber) {
            // onUserSignIn.mutate({ phoneNumber })
            console.log(phoneNumber)
            setPage("verify")
        }
    }

    return (
        <>
            {page === "info" &&
                <form onSubmit={onSubmit}>
                    <div className="space-y-5 w-[100%]">
                        <div className="flex-row">
                            <span className="flex">
                                <h1 className={`${founders.className} bold lg:text-[200%] md:text-[180%] text-black`}>
                                    Welcome to the Backstage.
                                </h1>
                            </span>
                            <span className="flex justify-center">
                                <h2 className={`${roboto.className} font-light italic text-start md:text-[160%] lg:text-[180%] text-black`}>
                                    You’re just a step away from unlocking the inner circle of The6ixCollective. Enter your phone number to access exclusive spaces where connections are made and creativity flows.
                                </h2>
                            </span>
                            <span className="flex justify-center py-5 w-[100%]">
                                <PhoneInput
                                    className={`phoneInput ${founders.className}`}
                                    defaultCountry="US"
                                    placeholder="Your Phone Number"
                                    color="#3e3e3e"
                                    value={phoneNumber}
                                    onChange={(e) => { setPhoneNumber(e) }} />

                            </span>
                            <span className="flex justify-center py-5">
                                <Button
                                    className={`${founders.className} bg-green-400 sm:w-[40%] w-[100%]`}
                                    endContent={<ArrowBigRight />}
                                    disabled={isLoading}
                                    isLoading={isLoading}
                                    variant="shadow"
                                    color="primary"
                                    type="submit" >
                                    Next Step
                                </Button>
                            </span>
                        </div>
                    </div>
                </form>}
            {page === "verify" && (<VerificationForm phoneNumber={phoneNumber ?? ""} />)}
            <Spacer className="my-5"></Spacer>
            <div className="flex mx-auto justify-center ">
                <RadioGroup
                    orientation="horizontal"
                    value={page}
                    color="secondary"
                >
                    <Radio value="info" ></Radio>
                    <Radio value="verify"></Radio>
                    <Radio value="actions"></Radio>
                </RadioGroup>
            </div>
        </>
    )
}
