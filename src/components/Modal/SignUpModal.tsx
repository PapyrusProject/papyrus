'use client';

//store
import { useSignup } from "@/store/useSignup";

//modal
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";
import { RegisteForm } from "../form/formRegister/RegisterForm";

export default function SignupModal() {

    const [show, setShow] = useSignup((state) => [state.signup, state.toggleSignup])

    return (
        <Modal isOpen={show} onOpenChange={setShow}>
            <ModalContent>
                <ModalHeader onClick={() => setShow()}></ModalHeader>
                <ModalBody className="flex flex-col justify-center items-center">
                    <h1 className="text-primary text-4xl font-bold">Sign Up</h1>
                    <RegisteForm />
                </ModalBody>
                <ModalFooter></ModalFooter>
            </ModalContent>
        </Modal>
    )
}