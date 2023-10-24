'use client';

import { NextUIProvider } from "@nextui-org/react";
import { ReactNode } from "react"

type providerProps = {
    children: ReactNode
}

export default function UiProvider({ children }: providerProps) {
    return (
        <NextUIProvider>{children}</NextUIProvider>
    )
}