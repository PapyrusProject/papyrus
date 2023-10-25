'use client';

//store
import { useLogin } from "@/store/useLogin";

//modal
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";

export default function LoginModal() {

    const [show, setShow] = useLogin((state) => [state.login, state.toggleLogin])

    return (
        <Modal isOpen={show} onOpenChange={setShow}>
            <ModalContent>
                <ModalHeader onClick={() => setShow()}></ModalHeader>
                <ModalBody>
                    <p>Login</p>
                </ModalBody>
                <ModalFooter></ModalFooter>
            </ModalContent>
        </Modal>
    )
}