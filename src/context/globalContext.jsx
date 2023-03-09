import { create } from 'zustand'

export const useProductsStore = create((set) => ({
  products: 0,
  increaseQuant: () => set(state => {products: state.products + 1}),
  decreaseQuant: () => set(state => {products: state.products - 1})
}));