'use client';

//store
import { useContact } from "@/store/useContact";
import { useModal } from "./useModal";

//modal
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";

//components
import Link from "next/link";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

//icons
import { PiDiscordLogoFill, PiGithubLogoFill } from "react-icons/pi";


export default function ContactModal() {

    const { register, errors, isSubmitting } = useModal()

    const [show, setShow] = useContact((state) => [state.contact, state.toggleContact])

    return (
        < Modal isOpen={show} onOpenChange={setShow} >
            <ModalContent>
                <ModalHeader onClick={() => setShow()}></ModalHeader>
                <ModalBody className="flex flex-col justify-center items-center">
                    <h1 className="text-primary text-4xl font-bold">Papyrus</h1>
                    <form action="https://formsubmit.co/papyrus@developers.org" method="POST" className="flex flex-col gap-5">
                        <label className="font-semibold">Name:</label>
                        <Input
                            type='text'
                            variant={errors.username ? 'error' : 'default'}
                            disabled={isSubmitting}
                            {...register('username')}
                            error={errors.username?.message}
                            placeholder="Type your name"
                        />
                        <label className="font-semibold">Email:</label>
                        <Input
                            type='email'
                            variant={errors.email ? 'error' : 'default'}
                            disabled={isSubmitting}
                            {...register('email')}
                            name='email'
                            error={errors.email?.message}
                            placeholder="Type your email"
                        />
                        <label className="font-semibold">Message:</label>
                        <textarea placeholder="Type your message..."
                            name="message"
                            className={`p-2 border border-primary outline-none rounded-xl ${errors.message ? 'text-red-500' : 'focus:border-blue-400'}`}
                        ></textarea>
                        <Button type="submit" variant='blue' size="md">Send your message</Button>
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