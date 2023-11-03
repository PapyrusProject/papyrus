"use client";
// Components
import { Button } from "@/components/ui/Button";

// Next
import { signOut, useSession } from "next-auth/react"
import Link from "next/link"
import Spinner from "@/components/ui/Spinner";
import LoginModal from "@/components/Modal/LoginModal";
import SignUpModal from "@/components/Modal/SignUpModal";

export const Sessions = () => {
    const { status } = useSession()

    if (status === 'unauthenticated') {
        return (
            <div className="flex items-center gap-2">
                <SignUpModal  />
                <LoginModal />
            </div>
        )
    }

    if (status === 'loading') {
        return (
            <Spinner size="lg" />
        )
    }

    return (
        <div className="flex items-center gap-2">
            <Link href='/profile' className="hover:text-primary">Profile</Link>
            <Button onClick={() => signOut({ callbackUrl: '/' })}>SignOut</Button>
        </div>
    )
}
