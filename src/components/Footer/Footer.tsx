'use client';

import { useContact } from "@/store/useContact";
import Link from "next/link";
import { RiSendPlaneFill } from 'react-icons/ri'

export default function Footer() {

    const setContact = useContact((state) => state.toggleContact)

    return (
        <div className="flex justify-end items-center gap-4 w-full py-6">
            <div className="flex justify-between w-[55%]">
                <p>
                    Copyright&copy;papyprus
                </p>
                <button className="text-primary flex items-center justify-center gap-2 hover:underline" onClick={() => setContact()}>Contact <RiSendPlaneFill className="text-primary text-xl" /></button>
            </div>
        </div>
    )
}