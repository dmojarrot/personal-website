import { FaChevronRight } from 'react-icons/fa'
import ModalChevron from './ModalChevron'

function HamburguerMenu() {
  return (
    <nav className='flex flex-col h-full max-h-screen px-6 overflow-y-auto'>
      <ul>
        <li className='mb-3 lg:hidden'>
          <a
            href='#projects'
            className={`cursor-pointer dark:hover:text-white hover:text-black  text-gray-500 py-2 rounded-md text-base font-medium flex justify-between `}
          >
            Projects
            <FaChevronRight size={20} />
          </a>
        </li>
        <li className='mb-3 lg:hidden'>
          <ModalChevron />
        </li>
        <li className='mb-3 lg:hidden'>
          <a
            href='mailto:dmojarro2001@gmail.com'
            className={`cursor-pointer w-full dark:hover:text-white hover:text-black text-gray-500 py-2 rounded-md text-base font-medium flex justify-between `}
          >
            Contact
            <FaChevronRight size={20} />
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default HamburguerMenu
