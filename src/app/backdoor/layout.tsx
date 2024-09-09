"use client"
import { Spacer, Radio, RadioGroup } from "@nextui-org/react"
import { SixLogo } from "../_components/svg/SixLogo"
import { useState } from "react";
import { useSearchParams } from "next/navigation";

type Page = "info" | "verify" | "actions"

export default function SignupPage({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    const [page, setPage] = useState("info" as Page)
    const searchParams = useSearchParams()
    const accessToken = searchParams.get('access_token')
    const refreshToken = searchParams.get('refresh_token')

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
                            {children}
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