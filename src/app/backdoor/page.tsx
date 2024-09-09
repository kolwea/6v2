'use client'

import { Button } from "@nextui-org/react"
import { useState, type FormEvent } from "react"

import { api } from "~/trpc/react"
import { VerificationForm } from "./verify"
import { PhoneInput } from "./components"
import { ArrowBigRight } from "lucide-react"
import { founders, roboto } from "../fonts"

export default function BasicInfoForm() {
    const [phoneNumber, setPhoneNumber] = useState("+1")
    const [showVerify, setShowVerify] = useState(false)

    const onUserSignIn = api.user.signInUserOTP.useMutation()
    const { isLoading } = onUserSignIn


    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onUserSignIn.mutate({ phoneNumber })
        setShowVerify(true)
    }

    const SignUpForm = () => (
        <form onSubmit={onSubmit}>
            <div className="form  row-auto w-screen space-y-5 px-8 col-span-1 block justify-center ">
                <div className="w-[100%] inline-block m-auto px-10">
                    <span className="w-[100%] max-w-screen-lg flex justify-center">
                        <h1 className={`${founders.className} m-auto bold text-center lg:text-[400%] sm:text-[300%] xm:text-[200%]  text-black`}>Welcome to the Backstage.</h1>
                    </span>
                    <span className="md:w-[80%] lg:w-[100%] m-auto flex justify-center">
                        <h2 className={`${roboto.className} font-thin italic text-center sm:text-[50%] md:text-[160%] lg:text-[200%] text-black`}>You’re just a step away from unlocking the inner circle of The6ixCollective. Enter your phone number to access exclusive spaces where connections are made and creativity flows.</h2>
                    </span>
                    <span className="w-[100%] max-w-screen-xs flex justify-center py-5">
                        <PhoneInput placeholder="Your Phone Number" color="#3e3e3e" onChange={(e) => setPhoneNumber(e)} />
                    </span>
                    <span className="w-[100%] flex justify-center py-5">
                        <Button
                            className={`${founders.className} w-[20%]`}
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
            {!showVerify && <SignUpForm/>}
            {showVerify && (<VerificationForm phoneNumber={phoneNumber} />)}
        </>
    )
}
