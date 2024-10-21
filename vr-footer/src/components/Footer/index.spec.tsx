import { render } from '@testing-library/react';

import Footer from '.';

describe('Footer', () => {
  it('should display component correctly', () => {
    const wrapper = render(<Footer />);

    const footerElement = wrapper.getByTestId('vr-footer-test');

    expect(footerElement).toBeInTheDocument();
  });
});
