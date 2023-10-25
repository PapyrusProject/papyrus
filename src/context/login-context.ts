'use client';

import { create } from "zustand";

type actions = {
    login: boolean
    toggleLogin: () => void
}

export const useLogin = create<actions>((set) => ({
    login: false,
    toggleLogin: () => set((state) => ({ login: !state.login }))
}))