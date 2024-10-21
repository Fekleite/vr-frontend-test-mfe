import { fireEvent, render } from "@testing-library/react"

import { Modal } from "."

describe("Modal", () => {
  const modalTitle = "Compras"
  const handleCloseModal = vi.fn()

  it("should display component correctly", () => {
    const wrapper = render(
      <Modal title={modalTitle} onClose={handleCloseModal} isOpen={true}>
        <span>Produto 1</span>
      </Modal>
    )

    const modalElement = wrapper.getByTestId("vr-header-modal-test")

    expect(modalElement).toBeInTheDocument()
  })

  it("should calls handleCloseModal when clicks on close button", () => {
    const wrapper = render(
      <Modal title={modalTitle} onClose={handleCloseModal} isOpen={true}>
        <span>Produto 1</span>
      </Modal>
    )

    const closeCartButton = wrapper.getByTestId("vr-header-modal-close-button-test")
    fireEvent.click(closeCartButton)

    expect(handleCloseModal).toHaveBeenCalled()
  })
})
