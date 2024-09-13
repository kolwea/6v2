'use client'
import { Button } from "@nextui-org/react"
import { useState } from "react"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "~/components/ui/input-otp"
import { api } from "~/trpc/react"
import { REGEXP_ONLY_DIGITS } from "input-otp"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "~/components/ui/form"

import { z } from "zod"
import { founders } from "../fonts"

const FormSchema = z.object({
    pin: z.string().min(6, {
        message: "Your one-time password must be 6 characters.",
    }),
})

export const VerificationForm = ({ phoneNumber }: { phoneNumber: string }) => {

    const useVerificationAttempt = api.user.verifyOTP.useMutation()
    const { isLoading, isError } = useVerificationAttempt

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            pin: "",
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data)
        // useVerificationAttempt.mutate({ phone: phoneNumber, token: data.pin })
    }


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <FormField
                    control={form.control}
                    name="pin"
                    disabled={isLoading || isError}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className={`text-slate-600 ${founders.className} font-bold text-[120%]`}>One-Time Password</FormLabel>
                            <FormControl >
                                <InputOTP maxLength={6} {...field}>
                                    <InputOTPGroup>
                                        <InputOTPSlot index={0} />
                                        <InputOTPSlot index={1} />
                                        <InputOTPSlot index={2} />
                                        <InputOTPSlot index={3} />
                                        <InputOTPSlot index={4} />
                                        <InputOTPSlot index={5} />
                                    </InputOTPGroup>
                                </InputOTP>
                            </FormControl>
                            <FormDescription className={`${founders.className} text-slate-500 text-[120%]`}>
                                Please enter the one-time password sent to your phone.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button className="bg-green-400 hover:bg-slate-800" type="submit">Submit</Button>
            </form>
        </Form>

        // <div className="flex-col space-y-5 px-8 col-span-1 justify-center bg-red-200">
        //     <div className="w-[100%] flex-col justify-center">
        //         <span className="m-auto w-[100%]">
        //             <h1>A code has been sent to your mobile device. Enter it here to verify your identity</h1>
        //         </span>
        //         <span className="m-auto w-[100%]">
        //             <InputOTP
        //                 maxLength={6}
        //                 pattern={REGEXP_ONLY_DIGITS}
        //                 value={code}
        //                 onChange={(value) => setCode(value)}
        //             >
        //                 <InputOTPGroup>
        //                     <InputOTPSlot index={0} />
        //                     <InputOTPSlot index={1} />
        //                     <InputOTPSlot index={2} />
        //                     {/* </InputOTPGroup>
        //                 <InputOTPSeparator />
        //                 <InputOTPGroup> */}
        //                     <InputOTPSlot index={3} />
        //                     <InputOTPSlot index={4} />
        //                     <InputOTPSlot index={5} />
        //                 </InputOTPGroup>
        //             </InputOTP>
        //         </span>
        //         <span className="m-auto w-[100%]">
        //             <Button onPress={() => useVerificationAttempt.mutate({
        //                 phone: phoneNumber,
        //                 token: code
        //             })} disabled={isLoading} isLoading={isLoading} variant="shadow" color="primary" type="submit" className="w-[30%]">
        //                 Next
        //             </Button>
        //         </span>
        //     </div>
        // </div>
    )
}
