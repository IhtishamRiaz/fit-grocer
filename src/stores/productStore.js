import { create } from 'zustand'
import { allProducts, allCategories } from '../Data/MockupData'

export const useProductStore = create((set) => ({
   // All Products
   products: [],
   setProducts: (product) => set({ product }),
   fetchProducts: async () => {
      // To Simulate an artificial delay
      // await new Promise((resolve) => setTimeout(resolve, 1000));
      const fetchedProducts = allProducts;
      set({ products: fetchedProducts });
   },

   // All Categories
   categories: [],
   setCategories: (categories) => set({ categories }),
   fetchCategories: async () => {
      // To Simulate an artificial delay
      // await new Promise((resolve) => setTimeout(resolve, 1000));
      const fetchedCategories = allCategories;
      set({ categories: fetchedCategories });
   },

   init: async () => {
      await useProductStore.getState().fetchProducts();
      await useProductStore.getState().fetchCategories();
   },
}))

useProductStore.getState().init();