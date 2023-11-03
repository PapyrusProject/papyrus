import { SessionProvider } from "next-auth/react"
import React from "react"

export const NextAuthProvider = ({children}: {children: React.ReactNode}) => {
    return(
        <SessionProvider>{children}</SessionProvider>
    )
}