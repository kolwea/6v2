'use client'

import { Button } from "@nextui-org/react"
import { useState, type FormEvent } from "react"

import { api } from "~/trpc/react"
import { VerificationForm } from "./verify"
import { PhoneInput } from "./components"
import { founders, roboto } from "../page"
import { ArrowBigRight } from "lucide-react"

export default function BasicInfoForm() {
    const [phoneNumber, setPhoneNumber] = useState("")
    const [showVerify, setShowVerify] = useState(false)

    const onUserSignIn = api.user.signInUserOTP.useMutation()
    const { isLoading } = onUserSignIn


    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onUserSignIn.mutate({ phoneNumber })
        setShowVerify(true)
    }

    return (
        <>
            {!showVerify && (
                <form onSubmit={onSubmit}>
                    <div className="form row-auto w-screen space-y-5 px-8 col-span-1 block justify-center ">
                        <div className="w-[100%] inline-block m-auto px-10">
                            <span className="w-[100%] max-w-screen-xs flex justify-center">
                                <h1 className={`${founders.className} m-auto w-max bold text-center sm:text=[150%] md:text-[200%] lg:text-[400%] text-black`}>Welcome to the Backstage.</h1>
                            </span>
                            <span className="w-[100%] max-w-screen-xs flex justify-center">
                                <h2 className={`${roboto.className} font-thin italic text-center md:text-[100%] lg:text-[200%] text-black`}>You’re just a step away from unlocking the inner circle of The6ixCollective. Enter your phone number to access exclusive spaces where connections are made and creativity flows.</h2>
                            </span>
                            <span className="w-[100%] flex justify-center py-5">
                                <PhoneInput className="max-w-screen-sm " color="#3e3e3e" onChange={(e) => setPhoneNumber(e)} />
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
                        <div className="w-[100%] flex justify-center">
                        </div>
                    </div>
                </form>)}


            {showVerify && (<VerificationForm phoneNumber={phoneNumber} />)}


        </>
    )
}
