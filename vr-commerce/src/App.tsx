import { lazy } from "react";

// @ts-ignore
const Header = lazy(async () => import("vr-header/Header"));
// @ts-ignore
const Footer = lazy(async () => import("vr-footer/Footer"));

export function App() {
  return (
    <>
      <Header />

      <Footer />
    </>
  )
}
