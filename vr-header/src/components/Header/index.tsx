import { useState } from 'react';

import logo from '../../assets/logo-white.png';

import { BagIcon } from '../BagIcon';
import { Modal } from '../Modal';
import { CartItem } from '../CartItem';

import { IProduct } from '../../@types/product';

interface IHeaderProps {
  cartItems: IProduct[];
}

export default function Header({ cartItems }: IHeaderProps) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  function handleOpenCart() {
    setIsCartOpen(true);
  }

  function handleCloseCart() {
    setIsCartOpen(false);
  }

  return (
    <header className="w-full bg-brand py-4">
      <div className="w-full max-w-[1440px] px-4 lg:px-12 mx-auto flex justify-between items-center">
        <img src={logo} alt="VR" className="w-8 h-8" />

        <div className="flex relative">
          <button
            type="button"
            className="h-8 px-4 bg-neutral-900 rounded-full hover:bg-neutral-700 duration-1000"
            onClick={handleOpenCart}
          >
            <BagIcon />

            <span className="sr-only">Sacola</span>
          </button>

          <span className="absolute -right-2 -top-2 bg-neutral-50 w-5 h-5 rounded-full text-xs text-neutral-900 font-semibold flex justify-center items-center">
            {cartItems?.length}
          </span>
        </div>
      </div>

      <Modal title="Compras" isOpen={isCartOpen} onClose={handleCloseCart}>
        <div className="h-full max-h-full overflow-y-auto flex flex-col gap-2">
          {cartItems?.map((cartItem) => <CartItem product={cartItem} />)}
        </div>
      </Modal>
    </header>
  );
}
