import { lazy } from "react";

// @ts-ignore
const Header = lazy(async () => import("vr-header/Header"));
// @ts-ignore
const Footer = lazy(async () => import("vr-footer/Footer"));
// @ts-ignore
const Cards = lazy(async () => import("vr-cards/Cards"));

export function App() {
  return (
    <>
      <Header />

      <div className="w-full my-10">
        <Cards />
      </div>

      <Footer />
    </>
  )
}
