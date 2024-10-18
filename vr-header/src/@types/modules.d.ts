declare module "vr-commerce/store" {
  import { IProduct } from "../product"

  interface ICartState {
    cartItems: IProduct[]
    addProductOnCart: (product: IProduct) => void
  }

  export const useStore: () => ICartState
}
