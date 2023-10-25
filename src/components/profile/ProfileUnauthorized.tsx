'use client';

// Components
import { Button } from "@/components/ui/Button"
import { useLogin } from "@/context/login-context";
import { LoginContext } from "@/context/modal-context"
import { useContext } from "react"

// Icons
import { BiSolidUser } from 'react-icons/bi'

export const ProfileUnauthorized = () => {

    const setShow = useLogin((state) => state.toggleLogin)

    return (
        <div className="flex items-center gap-4">
            <Button variant={'blue'}><BiSolidUser />SignUp</Button>
            <Button variant={'white'} onClick={() => setShow()} >Login</Button>
        </div>
    )
}