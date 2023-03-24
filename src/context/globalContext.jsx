import { create } from 'zustand'

export const useCartStore = create((set) => ({
  count: 0,
  cart: [],
  increaseCount: () => set((state) => ({count: state.count + 1 })),
  decreaseQuant: () => set((state) => ({ count: state.count - 1 })),
  addProduct: (product) => set((state) => ({
    cart: [
    {
      id: product.id,
      price: product.price,
      quantity: product.quantity,
    },
    ...state.cart,
  ]})),
  removeProduct: id => set(state => ({
    cart: state.cart.filter(product => product.id !== id)
  })),
  updateProduct: product => set(state => ({
    cart: state.cart.map(item => {
      if (item.id === product.id) {
        return {
          ...item,
          quantity: product.quantity,
        };
      } else {
        return item;
      }
    })
  }))
}));