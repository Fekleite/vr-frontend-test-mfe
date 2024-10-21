import { fireEvent, render, screen } from '@testing-library/react';

import Header from '.';

describe('Header', () => {
  const cartItemsMock = [
    {
      id: 1,
      title: 'Produto 1',
      description: 'Descrição produto 1',
      price: 99.0,
      images: ['../../assets/placeholder-image.png'],
    },
    {
      id: 2,
      title: 'Produto 2',
      description: 'Descrição produto 2',
      price: 89.0,
      images: ['../../assets/placeholder-image.png'],
    },
  ];

  it('should display component correctly', () => {
    const wrapper = render(<Header cartItems={cartItemsMock} />);

    const headerElement = wrapper.getByTestId('vr-header-test');

    expect(headerElement).toBeInTheDocument();
  });

  it('should display number of cart items', () => {
    const wrapper = render(<Header cartItems={cartItemsMock} />);

    const cartNumber = wrapper.getByTestId('vr-header-cart-number-test');

    expect(cartNumber.innerText).toBe('2');
  });

  it('should open modal when clicks on open cart button', () => {
    const wrapper = render(<Header cartItems={cartItemsMock} />);

    const openCartButton = wrapper.getByTestId(
      'vr-header-open-cart-button-test',
    );
    fireEvent.click(openCartButton);

    const modal = screen.getByTestId('vr-header-modal-test');

    expect(modal).toBeInTheDocument();
  });
});
