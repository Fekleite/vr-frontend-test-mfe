declare module "vr-header/Header" {
  import { IProduct } from './product'
  interface HeaderProps {
    cartItems: IProduct[]
  }

  const Header: React.ComponentType<HeaderProps>;
  export default Header;
}

declare module "vr-footer/Footer" {
  const Footer: React.ComponentType;
  export default Footer;
}

declare module "vr-cards/Cards" {
  import { IProduct } from './product'
  interface CardsProps {
    addProductOnCart : (product: IProduct) => void
  }

  const Cards: React.ComponentType<CardsProps>;
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
