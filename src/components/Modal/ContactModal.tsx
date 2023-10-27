'use client';

import { useContact } from "@/store/useContact";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";
import Link from "next/link";
import { PiDiscordLogoFill, PiGithubLogoFill } from "react-icons/pi";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

export default function ContactModal() {

    const [show, setShow] = useContact((state) => [state.contact, state.toggleContact])

    return (
        < Modal isOpen={show} onOpenChange={setShow} >
            <ModalContent>
                <ModalHeader onClick={() => setShow()}></ModalHeader>
                <ModalBody className="flex flex-col justify-center items-center">
                    <h1 className="text-primary text-4xl font-bold">Papyrus</h1>
                    <form className="flex flex-col gap-5">
                        <label className="font-semibold">Name:</label>
                        <Input
                            type='text'
                            placeholder="Type your name"
                        />
                        <label className="font-semibold">Email:</label>
                        <Input
                            type='text'
                            placeholder="Type your email"
                        />
                        <label className="font-semibold">Message:</label>
                        <textarea placeholder="Type your message..."
                            className="p-2 border border-primary outline-none rounded-xl focus:border-blue-400"
                        ></textarea>
                        <Button variant='blue' size="md">Send your message</Button>
                    </form>
                </ModalBody>
                <ModalFooter className="flex justify-center items-center gap-3">
                    <Link href='https://github.com/PapyrusProject/papyrus'>
                        <PiGithubLogoFill className="text-primary text-4xl" />
                    </Link>
                    <Link href="https://discord.gg/QcraJAg9">
                        <PiDiscordLogoFill className="text-primary text-4xl" />
                    </Link>
                </ModalFooter>
            </ModalContent>
        </Modal >
    )
}