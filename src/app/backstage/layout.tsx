"use client"
import { Spacer, Radio, RadioGroup, Divider } from "@nextui-org/react"
import { SixLogo } from "../_components/svg/SixLogo"
import { useState } from "react";
import { useSearchParams } from "next/navigation";


export default function SignupPage({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    const searchParams = useSearchParams()
    const accessToken = searchParams.get('access_token')
    const refreshToken = searchParams.get('refresh_token')

    return (
        <main>
            <section className="h-screen w-screen flex overflow-hidden bg-slate-100">
                <div className="w-screen top-10 flex">
                    <div className="flex-row w-[100%] max-w-[1000px] mx-auto">
                        <Spacer className="my-[15%]"></Spacer>
                        <div className="logoWrapper flex justify-center mx-10">
                            <SixLogo scale={0.3} fill="#631313" />
                        </div>
                        <div className="h-[250px] mx-10 flex-row justify-center">
                            <div className="my-5 lg:my-10 flex justify-center ">
                                <Divider className="bg-gray-400 py-[0.55pt]" />
                            </div>
                            {children}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}