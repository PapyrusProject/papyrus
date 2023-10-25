'use client';

import { LoginContext } from "@/context/modal-context";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";
import { useContext } from "react";

export default function LoginModal() {

    const { show, setShow } = useContext(LoginContext)

    return (
        <Modal isOpen={show} onOpenChange={setShow}>
            <ModalContent>
                <ModalHeader onClick={() => setShow(false)}></ModalHeader>
                <ModalBody>
                    <p>Teste Modal</p>
                </ModalBody>
                <ModalFooter></ModalFooter>
            </ModalContent>
        </Modal>
    )
}