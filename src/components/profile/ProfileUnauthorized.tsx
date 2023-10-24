// Components
import { Button } from "@/components/ui/Button"

// Icons
import { BiSolidUser } from 'react-icons/bi'

export const ProfileUnauthorized = () => {
    return (
        <div className="flex items-center gap-4">
            <Button variant={'blue'} ><BiSolidUser />SignUp</Button>
            <Button variant={'white'}>Login</Button>
        </div>
    )
}