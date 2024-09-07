'use client'
import { Button } from "@nextui-org/react"
import { type AuthOtpResponse } from "@supabase/supabase-js"
import { useState } from "react"
import { api } from "~/trpc/react"


const generateReferralUrl = () => {
    const referralCode = ""

    return ''
}

export default function DashboardPage() {
    const [user, setUser] = useState({} as AuthOtpResponse)

    const { data, error, isLoading } = api.user.signInUserOTP.useQuery({
        phoneNumber: "4152127777"
    })


    return (
        < div >
            <Button>
                Sign In
            </Button>
            <div>
                {isLoading ?? data}
            </div>
        </div >
    )
}