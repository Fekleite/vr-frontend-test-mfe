import { lazy } from "react";

const Header = lazy(async () => import("vr-header/Header"));
const Footer = lazy(async () => import("vr-footer/Footer"));
const Cards = lazy(async () => import("vr-cards/Cards"));
const CardsWrapper = lazy(async () => import("vr-cards/CardsWrapper"));

export function App() {
  return (
    <>
      <Header />

      <div className="w-full my-10">
        <CardsWrapper>
          <Cards />
        </CardsWrapper>
      </div>

      <Footer />
    </>
  )
}
