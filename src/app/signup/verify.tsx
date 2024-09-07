'use client'
import { Button, Input } from "@nextui-org/react"
import { useState } from "react"
import { api } from "~/trpc/react"

export const VerificationForm = ({ phoneNumber }: { phoneNumber: string }) => {
    const useVerificationAttempt = api.user.verifyOTP.useMutation()
    const { isLoading, data } = useVerificationAttempt
    const [code, setCode] = useState("")

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
                            onChange={(e) => setCode(e?.currentTarget.value)}
                            // defaultValue="Elon"
                            className="min-w-screen-xs max-w-screen-sm"
                        />
                    </div>
                    <div className="w-[100%] flex justify-center">
                        <Button onPress={() => useVerificationAttempt.mutate({
                            phone: phoneNumber,
                            token: code
                        })} disabled={isLoading} isLoading={isLoading} variant="shadow" color="primary" type="submit" className="w-[30%]">
                            Next
                        </Button>
                        {JSON.stringify(data)}
                    </div>
                </div>
            </div>
        </div>
    )
}