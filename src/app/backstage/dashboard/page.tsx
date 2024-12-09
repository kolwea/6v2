'use client'
import { useEffect } from "react"
import { getSession } from "~/trpc/auth"

export default function BackstageDashboard() {
    const session = getSession()

    // const onSignOut = () => {}

    useEffect(() => {
        console.log(session)
    },[session])

    return <div>Dashboard</div>
}
