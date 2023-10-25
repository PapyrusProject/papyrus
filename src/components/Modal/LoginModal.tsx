'use client';

//store
import { useLogin } from "@/store/useLogin";

//modal
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";
import { LoginForm } from "../form/formLogin/LoginForm";

export default function LoginModal() {

    const [show, setShow] = useLogin((state) => [state.login, state.toggleLogin])

    return (
        <Modal isOpen={show} onOpenChange={setShow}>
            <ModalContent>
                <ModalHeader onClick={() => setShow()}></ModalHeader>
                <ModalBody className="flex flex-col justify-center items-center">
                    <h1 className="text-primary text-4xl font-bold">Papyrus</h1>
                    <h2 className="font-semibold text-2xl">Login</h2>
                    <LoginForm />
                </ModalBody>
                <ModalFooter></ModalFooter>
            </ModalContent>
        </Modal>
    )
}