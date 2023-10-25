'use client'
// Components
import { Button } from "@/components/ui/Button"

// Icons
import { BiSolidUser } from 'react-icons/bi'

// Next
import { useSession } from "next-auth/react"
import Link from "next/link"

export const ProfileUnauthorized = () => {
    const {data: session} = useSession()

    if(!session){
    return (
        <div className="flex items-center gap-4">
            <Button variant={'blue'}><BiSolidUser />SignUp</Button>
            <Button variant={'white'}>Login</Button>
        </div>
    )
    }

    return(
        <div className="flex items-center gap-4">
           <Link href='/profile' className="hover:text-primary">Profile</Link> 
           <Button variant={'blue'}>SignOut</Button>
        </div>
    )
}