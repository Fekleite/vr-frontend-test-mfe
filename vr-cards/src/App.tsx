import { IProduct } from './@types/product';

import Cards from './components/Cards';
import CardsWrapper from './components/CardsWrapper';

export function App() {
  function addProductOnCart(product: IProduct) {
    console.log(product);
  }

  return (
    <CardsWrapper>
      <Cards addProductOnCart={addProductOnCart} />
    </CardsWrapper>
  );
}
