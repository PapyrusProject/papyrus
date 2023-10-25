'use client';

import { useLogin } from "@/context/login-context";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";
import { create } from "zustand";

export default function LoginModal() {

    const [show, setShow] = useLogin((state) => [state.login, state.toggleLogin])

    return (
        <Modal isOpen={show} onOpenChange={setShow}>
            <ModalContent>
                <ModalHeader onClick={() => setShow()}></ModalHeader>
                <ModalBody>
                    <p>Teste Modal</p>
                </ModalBody>
                <ModalFooter></ModalFooter>
            </ModalContent>
        </Modal>
    )
}