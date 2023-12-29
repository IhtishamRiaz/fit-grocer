import { create } from 'zustand'

export const useGlobalStore = create((set) => ({
   isMobile: false,
   setIsMobile: (isMobile) => set({ isMobile }),
}))