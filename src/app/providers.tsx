/* eslint-disable @typescript-eslint/unbound-method */
'use client'
import { NextUIProvider } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { type Session } from '@supabase/auth-helpers-nextjs';
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { saveSession, clearSession } from '~/trpc/auth';

export function Providers({ children, initialSession }: { children: React.ReactNode, initialSession?: Session }) {
    const router = useRouter();
    const [supabaseClient] = useState(() => createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!));

    useEffect(() => {
        const { data: { subscription } } = supabaseClient.auth.onAuthStateChange(
            (event, session) => {
                if (event === 'SIGNED_OUT') {
                    clearSession()
                } else if (session) {
                    saveSession({
                        access_token: session.access_token,
                        refresh_token: session.refresh_token,
                        expires_at: Date.now() + session.expires_in * 1000,
                    })
                }
            })

        return () => {
            subscription.unsubscribe()
        }
    }, [])

    return (
        <SessionContextProvider supabaseClient={supabaseClient} initialSession={initialSession} >
            <NextUIProvider navigate={router.push}>
                {children}
            </NextUIProvider>
        </SessionContextProvider>
    )
}
