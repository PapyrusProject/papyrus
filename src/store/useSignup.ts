'use client';

import { create } from "zustand";

type actions = {
    signup: boolean
    toggleSignup: () => void
}

export const useSignup = create<actions>((set) => ({
    signup: false,
    toggleSignup: () => set((state) => ({ signup: !state.signup }))
}))