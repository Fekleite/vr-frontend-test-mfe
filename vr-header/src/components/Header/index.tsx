import logo from '../../assets/logo-white.png'
import { BagIcon } from '../BagIcon'

export default function Header() {
  return (
    <header className='w-full bg-brand py-4'>
      <div className='w-full max-w-[1440px] px-12 mx-auto flex justify-between items-center'>
        <img src={logo} alt="VR" className='w-8 h-8' />

        <div className='flex'>
          <button type='button' className='h-8 px-4 bg-neutral-900 rounded-full hover:bg-neutral-700 duration-200'>
            <BagIcon />

            <span className='sr-only'>Sacola</span>
          </button>
        </div>
      </div>
    </header>
  )
}
