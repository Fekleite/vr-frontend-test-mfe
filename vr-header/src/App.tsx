import { IProduct } from "./@types/product";

import Header from "./components/Header";

export function App() {
  const cartItems: IProduct[] = []

  return (
    <div>
      <Header cartItems={cartItems} />
    </div>
  )
}
