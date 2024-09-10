'use client'
import { Button, Input } from "@nextui-org/react"
import { useState } from "react"
import { api } from "~/trpc/react"

export const VerificationForm = ({ phoneNumber }: { phoneNumber: string }) => {
    const useVerificationAttempt = api.user.verifyOTP.useMutation()
    const { isLoading } = useVerificationAttempt
    const [code, setCode] = useState("")

    return (
        <div className="flex-col space-y-5 px-8 col-span-1 justify-center bg-red-200">
            <div className="w-[100%] flex-col justify-center">
                <span className="m-auto w-[100%]">
                    <h1>A code has been sent to your mobile device. Enter it here to verify your identity</h1>
                </span>
                <span className="m-auto w-[100%]">
                    <Input
                        isRequired
                        type="number"
                        label="0"
                        name="0"
                        onChange={(e) => setCode(e?.currentTarget.value)}
                        className="min-w-screen-xs max-w-screen-sm"
                    />
                </span>
                <span className="m-auto w-[100%]">
                    <Button onPress={() => useVerificationAttempt.mutate({
                        phone: phoneNumber,
                        token: code
                    })} disabled={isLoading} isLoading={isLoading} variant="shadow" color="primary" type="submit" className="w-[30%]">
                        Next
                    </Button>
                </span>
            </div>
        </div>
    )
}