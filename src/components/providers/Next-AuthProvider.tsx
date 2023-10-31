'use client';

import { SessionProvider } from "next-auth/react"
import { ReactNode } from "react"

type providerProps = {
    children: ReactNode
}

export default function ProviderNextAuth({ children }: providerProps) {
    return (
        <SessionProvider>{children}</SessionProvider>
    )
}