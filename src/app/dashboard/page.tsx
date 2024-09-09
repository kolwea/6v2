'use client'
import { Button } from "@nextui-org/react"
import { type AuthOtpResponse } from "@supabase/supabase-js"
import { useState } from "react"
import { api } from "~/trpc/react"


export default function DashboardPage() {
    return (
        < div >
            <Button>
                Sign In
            </Button>
            <div>
            </div>
        </div >
    )
}