import { Navigation } from "@/app/(settings)/_components/Navigation"
import Spinner from "@/components/ui/Spinner"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"

const SettingsLayout = ({children}: {children: React.ReactNode}) => {
    const {status} = useSession()

    if(status === 'loading'){
        return (
            <div className="h-full flex items-center justify-center">
                <Spinner size="xl"/>
            </div>
        )
    }

    if(status === 'unauthenticated'){
        return redirect('/')
    }

    return(
        <>
        <div>
            <Navigation />
            <main>
                {children}
            </main>
        </div>
        </>
    )
}

export default SettingsLayout