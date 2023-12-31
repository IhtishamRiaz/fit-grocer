import { create } from 'zustand'

export const useGlobalStore = create((set) => ({
   isMobile: false,
   setIsMobile: (isMobile) => set({ isMobile }),

   order: {
      total: 0,
      items: [],
   },
   setOrder: (order) => set({ order }),
}))