'use client'

import { Input, Button } from "@nextui-org/react"
import { useState, type FormEvent } from "react"

import { api } from "~/trpc/react"
import { VerificationForm } from "./verify"
import { PhoneInput } from "./components"

export default function BasicInfoForm() {
    const [phoneNumber, setPhoneNumber] = useState("")
    const [showVerify, setShowVerify] = useState(false)

    const onUserSignIn = api.user.signInUserOTP.useMutation()
    const { isLoading, data } = onUserSignIn


    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onUserSignIn.mutate({ phoneNumber })
        setShowVerify(true)
    }

    return (
        <>
            {!showVerify && (<form onSubmit={onSubmit}>
                <div className="form row-auto w-screen space-y-5 px-8 col-span-1 block justify-center bg-red-200">
                    <div className="w-[100%] flex justify-center">
                        <h1>Let's gather some basic information. This information will be used to build your initial profile.</h1>
                    </div>
                    <div className="w-[100%] flex justify-center">
                        {/* <Input
                            isRequired
                            type="number"
                            label="Cell"
                            name="cell"
                            onChange={(e) => setPhoneNumber(e?.currentTarget.value)}
                            className="min-w-xs max-w-screen-sm" /> */}
                        <PhoneInput onChange={(e) => setPhoneNumber(e)} />
                    </div><div className="w-[100%] flex justify-center">
                        <Button disabled={isLoading} isLoading={isLoading} variant="shadow" color="primary" type="submit" className="w-[30%]">
                            Next
                        </Button>
                    </div>
                </div>
                {/* <UserData /> */}
            </form>)}


            {showVerify && (<VerificationForm phoneNumber={phoneNumber} />)}


        </>
    )
}
