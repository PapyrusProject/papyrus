"use client";
// Components
import { Button } from "@/components/ui/Button";

// Icons
import { BiSolidUser } from "react-icons/bi";

// Next
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export const ProfileUnauthorized = () => {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return(
    <div className="flex items-center gap-4">
      <Link href="/profile" className="hover:text-primary">
        {session?.user.message}
      </Link>
      <Button variant={"blue"} onClick={() => signOut({redirect: false, callbackUrl: '/'})}>
        SignOut
      </Button>
    </div>
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
