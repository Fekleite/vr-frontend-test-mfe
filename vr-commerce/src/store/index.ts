import { create } from "zustand";

interface IProduct {
  id: number
  title: string
  price: number
  images: string[]
}

interface ICartState {
  cartItems: IProduct[]
  addProductOnCart: (product: IProduct) => void
}

export const useStore = create<ICartState>((set) => {
  return {
    cartItems: [],
    addProductOnCart: (product: IProduct) => {
      set((state) => {
        return {
          ...state,
          cartItems: [...state.cartItems, product]
        }
      })
    }
  }
})
