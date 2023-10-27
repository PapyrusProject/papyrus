"use client";
// Components
import { Button } from "@/components/ui/Button";

// Icons
import { BiSolidUser } from "react-icons/bi";

// Next
<<<<<<< HEAD
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export const ProfileUnauthorized = () => {
  const {data: session, status } = useSession();

  if (status === "authenticated") {
    return(
    <div className="flex items-center gap-4">
      <Link href="/profile" className="hover:text-primary">
        Profile
      </Link>
      <Button variant={"blue"} onClick={() => signOut({redirect: false, callbackUrl: '/'})}>
        SignOut
      </Button>
    </div>
=======
import { signOut, useSession } from "next-auth/react"
import Link from "next/link"
import { useLogin } from "@/store/useLogin"
import { useSignup } from "@/store/useSignup"

export const ProfileUnauthorized = () => {
    const { data: session } = useSession()

    const setLogin = useLogin((state) => state.toggleLogin)
    const setSignup = useSignup((state) => state.toggleSignup)

    if (!session) {
        return (
            <div className="flex items-center gap-4">
                <Button variant={'blue'} onClick={() => setSignup()}><BiSolidUser />SignUp</Button>
                <Button variant={'white'} onClick={() => setLogin()}>Login</Button>
            </div>
        )
    }

    return (
        <div className="flex items-center gap-4">
            <Link href='/profile' className="hover:text-primary">Profile</Link>
            <Button variant={'blue'} onClick={() => signOut()}>SignOut</Button>
        </div>
>>>>>>> origin
    )
  }
  return (
    <div className="flex items-center gap-4">
      <Button variant={"blue"}>
        <BiSolidUser />
        SignUp
      </Button>
      <Button variant={"white"}>Login</Button>
    </div>
  );
};
