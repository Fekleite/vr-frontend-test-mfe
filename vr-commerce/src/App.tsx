import { lazy, Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"

import { Fallback } from "./components/Fallback"
import { ErrorFallback } from "./components/ErrorFallback"

import { useCartStore } from "./store"
import { IProduct } from "./@types/product"

const Header = lazy(async () => import("vr-header/Header"))
const Footer = lazy(async () => import("vr-footer/Footer"))
const Cards = lazy(async () => import("vr-cards/Cards"))
const CardsWrapper = lazy(async () => import("vr-cards/CardsWrapper"))

export function App() {
  const { cartItems, addProductOnCart} = useCartStore()

  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      <Suspense fallback={<Fallback />}>
        <Header cartItems={cartItems} />
      </Suspense>

      <div className="w-full my-10">
        <Suspense fallback={<Fallback />}>
          <CardsWrapper>
            <Cards addProductOnCart={(product: IProduct) => addProductOnCart(product)} />
          </CardsWrapper>
        </Suspense>
      </div>

      <Suspense fallback={<Fallback />}>
        <Footer />
      </Suspense>
    </ErrorBoundary>
  )
}
