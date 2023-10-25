'use client';

//store
import { useSignup } from "@/store/useSignup";

//modal
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";

export default function SignupModal() {

    const [show, setShow] = useSignup((state) => [state.signup, state.toggleSignup])

    return (
        <Modal isOpen={show} onOpenChange={setShow}>
            <ModalContent>
                <ModalHeader onClick={() => setShow()}></ModalHeader>
                <ModalBody>
                    <p>Signup</p>
                </ModalBody>
                <ModalFooter></ModalFooter>
            </ModalContent>
        </Modal>
    )
}