'use client'

import { Button } from "@nextui-org/react"
import { useState, type FormEvent } from "react"

import { api } from "~/trpc/react"
import { VerificationForm } from "./verify"
import { ArrowBigRight } from "lucide-react"
import { founders, roboto } from "../fonts"
import type * as RPNInput from "react-phone-number-input";
import { PhoneInput } from "./components"

export default function BasicInfoForm() {
    const [phoneNumber, setPhoneNumber] = useState("")
    const [showVerify, setShowVerify] = useState(false)

    const onUserSignIn = api.user.signInUserOTP.useMutation()
    const { isLoading } = onUserSignIn

    // const PhoneI = useMemo(() => () => {
    //     return <PhoneInput placeholder="Your Phone Number" color="#3e3e3e" onChange={(e) => setPhoneNumber(e)} />
    // }, [setPhoneNumber])

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (phoneNumber) {
            onUserSignIn.mutate({ phoneNumber })
            setShowVerify(true)
        }
    }

    const SignUpForm = () => (
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
                    <span className="flex justify-center">
                        <PhoneInput
                            className="phoneInput"
                            placeholder="Your Phone Number"
                            color="#3e3e3e"
                            value={phoneNumber}
                            onChange={(e) => {setPhoneNumber(e)}} />

                    </span>
                    <span className="flex justify-center py-5">
                        <Button
                            className={`${founders.className}`}
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
        </form>)

    return (
        <>
            {!showVerify && <SignUpForm />}
            {showVerify && (<VerificationForm phoneNumber={phoneNumber ?? ""} />)}
        </>
    )
}
