'use client';

import { create } from "zustand";

type props = {
    contact: boolean,
    toggleContact: () => void
}

export const useContact = create<props>((set) => ({
    contact: false,
    toggleContact: () => set((state) => ({ contact: !state.contact }))
}))