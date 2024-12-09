'use client'

import { Button, RadioGroup, Spacer, Radio } from "@nextui-org/react"
import { useEffect, useState, type FormEvent } from "react"
import type * as RPNInput from "react-phone-number-input";


import { ArrowBigRight } from "lucide-react"
import { founders, roboto } from "../fonts"
import { PhoneInput } from "./components"
import { z } from "zod";

import { InputOTP, InputOTPGroup, InputOTPSlot } from "~/components/ui/input-otp"
import { api } from "~/trpc/react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { REGEXP_ONLY_DIGITS } from "input-otp"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "~/components/ui/form"
import { useRouter } from "next/navigation";
import { type AuthSession, saveSession } from "~/trpc/auth";


type Page = "info" | "verify" | "actions" | "error"

const VerificationFormSchema = z.object({
    pin: z.string().min(6, {
        message: "Your one-time password must be 6 characters.",
    }),
})

const Paginator = ({ page }: { page: Page }) => {
    return <div className="flex mx-auto justify-center ">
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
}

export default function BasicInfoForm() {
    const router = useRouter()
    const onUserSignIn = api.user.signInUserOTP.useMutation()
    const useVerificationAttempt = api.user.verifyOTP.useMutation()
    const { data: userData, isError: isUserDataError } = api.user.getUser.useQuery()

    const [page, setPage] = useState("info" as Page)
    const [phoneNumber, setPhoneNumber] = useState("" as RPNInput.Value)

    const { isLoading: isLoadingUserData } = onUserSignIn
    const { isLoading: isVerificationLoading, isError: isVerificationError } = useVerificationAttempt


    const verifcationForm = useForm<z.infer<typeof VerificationFormSchema>>({
        resolver: zodResolver(VerificationFormSchema),
        defaultValues: {
            pin: "",
        },
    })

    async function onSubmitPhoneNumber(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (phoneNumber.length >= 10) {
            const { error, data } = await onUserSignIn.mutateAsync({ phoneNumber })

            if (error) {
                throw new Error(error.message);
                // router.push("/error")
            }
            setPage("verify")
            return data;
        }
    }

    async function onSubmitVerification(e: z.infer<typeof VerificationFormSchema>) {
        const { error, data } = await useVerificationAttempt.mutateAsync({ phone: phoneNumber, token: e.pin })
        if (error) {
            router.push("/error")
        } 
        if (data?.session) {
            const { access_token, refresh_token, expires_in } = data.session;

            const session: AuthSession = {
                access_token,
                refresh_token,
                expires_at: Date.now() + expires_in * 1000, // expires_in is in seconds
            };
            saveSession(session);
        }
        router.push("/backstage/dashboard")
    }

    useEffect(() => {
        if (isUserDataError) {
            console.log("There was a problem...")
            // router.push("/backstage/dashboard")
        }
        console.log(userData)
    }, [userData])

    return (
        <>
            {page === "info" &&
                <form onSubmit={onSubmitPhoneNumber}>
                    <div className="space-y-5 w-[100%] text-slate-900">
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
                                    className={`phoneInput ${founders.className} text-slate-900`}
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
                                    disabled={isLoadingUserData}
                                    isLoading={isLoadingUserData}
                                    variant="shadow"
                                    color="primary"
                                    type="submit" >
                                    Next Step
                                </Button>
                            </span>
                        </div>
                    </div>
                </form>}
            {page === "verify" && (
                <div className="w-[100%] flex justify-center">
                    <Form {...verifcationForm}>
                        <form onSubmit={verifcationForm.handleSubmit(onSubmitVerification)} className="w-2/3 space-y-6 flex-col justify-center">
                            <FormField
                                control={verifcationForm.control}
                                name="pin"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className={`text-slate-600 ${founders.className} font-bold text-[180%] flex justify-center`}>One-Time Password</FormLabel>
                                        <FormControl >
                                            <InputOTP maxLength={6}
                                                pattern={REGEXP_ONLY_DIGITS}
                                                {...field}>
                                                <InputOTPGroup className={`${founders.className} flex justify-center w-[100%] text-slate-700`}>
                                                    <InputOTPSlot index={0} />
                                                    <InputOTPSlot index={1} />
                                                    <InputOTPSlot index={2} />
                                                    <InputOTPSlot index={3} />
                                                    <InputOTPSlot index={4} />
                                                    <InputOTPSlot index={5} />
                                                </InputOTPGroup>
                                            </InputOTP>
                                        </FormControl>
                                        <FormDescription className={`${founders.className} p-4 text-slate-500 sm:text-[150%] text-[120%] w-[100%] flex justify-center`}>
                                            Please enter the one-time password sent to your phone.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className={`${founders.className} w-[100%] flex justify-center`}>
                                <Button disabled={isVerificationLoading} className="bg-green-400 hover:bg-slate-800 sm:w-[40%] w-[100%]" type="submit">Submit</Button>
                            </div>
                        </form>
                    </Form>
                </div>
            )}
            {/* {page === "actions" && (
                <div className="w-[100%] flex justify-center">
                    "You made it!"
                    <Button>{JSON.stringify(data)}</Button>
                </div>)} */}
            <Spacer className="my-5"></Spacer>
            <Paginator page={page} />
        </>
    )
}
