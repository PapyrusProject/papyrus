'use client';

import { LoginContext } from "@/context/modal-context";
import { useState } from "react";

export default function ModalProvider({ children }: { children: React.ReactNode }) {

    const [show, setShow] = useState<boolean>(false);

    return (
        <LoginContext.Provider value={{ show, setShow }}>
            {children}
        </LoginContext.Provider>
    )
}