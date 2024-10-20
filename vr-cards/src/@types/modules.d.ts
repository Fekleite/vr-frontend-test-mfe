declare module "vr-commerce/store" {
  import { IProduct } from "../api/get-products"

  interface ICartState {
    cartItems: IProduct[]
    addProductOnCart: (product: IProduct) => void
  }

  export const useStore: () => ICartState
}
