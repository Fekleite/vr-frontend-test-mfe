import { create } from "zustand";

import { IProduct } from "../@types/product";

interface ICartState {
  cartItems: IProduct[]
  addProductOnCart: (product: IProduct) => void
}

export const useCartStore = create<ICartState>((set) => {
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
