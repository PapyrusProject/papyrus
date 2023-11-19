import { Button } from '@/components/ui/Button'
import {BsFillGearFill} from 'react-icons/bs'

export default function SidebarConfig() {
    return(
        <div className='w-12 flex flex-col items-center border-r border-r-primary relative'>
            <Button variant='ghost'
            className='absolute bottom-2'
            >
                <BsFillGearFill/>
            </Button>
        </div>
    )
}