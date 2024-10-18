import { useState } from 'react'
import logo from '../../assets/logo-white.png'
import { BagIcon } from '../BagIcon'
import { Modal } from '../Modal'

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false)

  function handleOpenCart() {
    setIsCartOpen(true)
  }

  function handleCloseCart() {
    setIsCartOpen(false)
  }

  return (
    <header className='w-full bg-brand py-4'>
      <div className='w-full max-w-[1440px] px-12 mx-auto flex justify-between items-center'>
        <img src={logo} alt="VR" className='w-8 h-8' />

        <div className='flex'>
          <button
            type='button'
            className='h-8 px-4 bg-neutral-900 rounded-full hover:bg-neutral-700 duration-1000'
            onClick={handleOpenCart}
          >
            <BagIcon />

            <span className='sr-only'>Sacola</span>
          </button>
        </div>
      </div>

      <Modal title='Compras' isOpen={isCartOpen} onClose={handleCloseCart} >
        Testando
      </Modal>
    </header>
  )
}
