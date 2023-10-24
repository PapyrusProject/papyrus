import { SessionProvider } from "next-auth/react"
import { ReactNode } from "react"

type providerProps = {
    children: ReactNode
}

export default function Provider({ children }: providerProps) {
    return (
        <SessionProvider>{children}</SessionProvider>
    )
}