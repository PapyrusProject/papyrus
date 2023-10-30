import { signIn } from "next-auth/react"
import Image from "next/image"

export const GoogleButtons = () => {
    return (
        <button
            className="p-2 flex items-center justify-center bg-white rounded-full border hover:border-primary"
            onClick={() => signIn('google', { callbackUrl: '/' })}
        >
            <Image src='/googleicon.png' width={20} height={20} alt='social login image' />
        </button>
    )
} 