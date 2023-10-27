'use client';

import { useContact } from "@/store/useContact";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";

export default function ContactModal() {

    const [show, setShow] = useContact((state) => [state.contact, state.toggleContact])

    return (
        < Modal isOpen={show} onOpenChange={setShow} >
            <ModalContent>
                <ModalHeader onClick={() => setShow()}></ModalHeader>
                <ModalBody className="flex flex-col justify-center items-center">

                </ModalBody>
                <ModalFooter></ModalFooter>
            </ModalContent>
        </Modal >
    )
}