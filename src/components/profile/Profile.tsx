'use client'
// Components
import { Button } from "@/components/ui/Button"

// Icons
import { BiSolidUser } from 'react-icons/bi'

// Next
import { signOut, useSession } from "next-auth/react"
import Link from "next/link"
import { useLogin } from "@/store/useLogin"

export const ProfileUnauthorized = () => {
    const { data: session } = useSession()

    const setShow = useLogin((state) => state.toggleLogin)

    if (!session) {
        return (
            <div className="flex items-center gap-4">
                <Button variant={'blue'}><BiSolidUser />SignUp</Button>
                <Button variant={'white'} onClick={() => setShow()}>Login</Button>
            </div>
        )
    }

    return (
        <div className="flex items-center gap-4">
            <Link href='/profile' className="hover:text-primary">Profile</Link>
            <Button variant={'blue'} onClick={() => signOut()}>SignOut</Button>
        </div>
    )
}