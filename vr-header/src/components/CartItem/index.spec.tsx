import { render } from "@testing-library/react"

import { CartItem } from "."

describe("CartItem", () => {
  const product = {
    id: 1,
    title: "Produto 1",
    description: "Descrição produto 1",
    price: 99.0,
    images: ["../../assets/placeholder-image.png"],
  }

  it("should display component correctly", () => {
    const wrapper = render(<CartItem product={product} />)

    const cartItemElement = wrapper.getByTestId("vr-header-cart-item-test")

    expect(cartItemElement).toBeInTheDocument()
  })

  it("should display formatted product price", () => {
    const wrapper = render(<CartItem product={product} />)

    const productPrice = wrapper.getByText("R$ 99,00")

    expect(productPrice).toBeInTheDocument()
  })
})
