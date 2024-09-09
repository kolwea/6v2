"use client"
import { Spacer, Radio, RadioGroup, Divider } from "@nextui-org/react"
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
            <section className="h-screen w-screen flex overflow-hidden bg-slate-100">
                <div className="w-screen top-10 flex">
                    <div className="flex-row">
                        <Spacer className="my-10"></Spacer>
                        <div className="logoWrapper flex justify-center mx-10">
                            <SixLogo scale={0.25} fill="#631313" />
                        </div>
                        <div className="h-[250px] m-1">
                            <div className=" w-[75%] my-7 flex mx-auto justify-center ">
                                <Divider className="bg-slate-300" />
                            </div>
                            {children}
                            <Spacer className="my-10"></Spacer>
                            <div className=" w-[75%] flex mx-auto justify-center ">
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
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}