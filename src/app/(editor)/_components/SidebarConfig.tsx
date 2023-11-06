import {BsFillGearFill} from 'react-icons/bs'

export default function SidebarConfig() {
    return(
        <div className='h-[1000px] w-[50px] flex flex-col-reverse items-center border border-primary'>
            <button className='mb-2'>
                <BsFillGearFill/>
            </button>
        </div>
    )
}