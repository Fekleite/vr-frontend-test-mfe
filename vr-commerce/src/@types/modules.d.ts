declare module "vr-header/Header" {
  const Header: React.ComponentType;
  export default Header;
}

declare module "vr-footer/Footer" {
  const Footer: React.ComponentType;
  export default Footer;
}

declare module "vr-cards/Cards" {
  const Cards: React.ComponentType;
  export default Cards;
}

declare module "vr-cards/CardsWrapper" {
  import { ReactNode } from "react";

  interface CardsWrapperProps {
    children: ReactNode;
  }

  const CardsWrapper: React.ComponentType<CardsWrapperProps>;
  export default CardsWrapper;
}
