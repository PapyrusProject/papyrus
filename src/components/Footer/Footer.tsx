'use client';

import { useContact } from "@/store/useContact";
import { RiSendPlaneFill } from 'react-icons/ri'

export default function Footer() {

    const setContact = useContact((state) => state.toggleContact)

    return (
            <section className="flex gap-4 justify-between my-2">
                <p>
                    Copyright&copy;papyprus
                </p>
                <button className="text-primary flex items-center justify-center gap-2 hover:underline sm:absolute right-6" onClick={() => setContact()}>Contact <RiSendPlaneFill className="text-primary text-xl" /></button>
            </section>
    )
}