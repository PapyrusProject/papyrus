'use client';

// Components
import { Button } from "@/components/ui/Button"
import { LoginContext } from "@/context/modal-context"
import { useContext } from "react"

// Icons
import { BiSolidUser } from 'react-icons/bi'

export const ProfileUnauthorized = () => {

    const { setShow } = useContext(LoginContext);

    return (
        <div className="flex items-center gap-4">
            <Button variant={'blue'}><BiSolidUser />SignUp</Button>
            <Button variant={'white'} onClick={() => setShow(true)} >Login</Button>
        </div>
    )
}