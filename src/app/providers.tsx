/* eslint-disable @typescript-eslint/unbound-method */
'use client'
import { NextUIProvider } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { createContext, useState } from 'react';
import { type Session } from '@supabase/supabase-js';


export const SessionContext = createContext<Session | undefined>(undefined)

export const SessionProvider = ({ children }: { children: React.ReactNode }) => {
    const [session] = useState()
    return (
        <SessionContext.Provider value={session}>
            {children}
        </SessionContext.Provider>)
}

export function Providers({ children }: { children: React.ReactNode }) {
    const router = useRouter();

    return (
        <SessionProvider>
                <NextUIProvider navigate={router.push}>
                    {children}
                </NextUIProvider>
        </SessionProvider>
    )
}