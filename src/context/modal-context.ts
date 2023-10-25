'use client';

import { createContext } from "react";

interface ModalContext {
    show: boolean,
    setShow: (value: boolean) => void;
}

export const LoginContext = createContext({
    show: false,
} as ModalContext)