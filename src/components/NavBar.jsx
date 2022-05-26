import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Modal from './Modal'
import { useState } from 'react'
import HamburguerMenu from './HamburguerMenu.jsx'
import DarkMode from './DarkMode.jsx'
import Logo from './Logo'

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  // function closeMenu() {
  //   setIsOpen(false)
  // }
  // function openMenu() {
  //   setIsOpen(true)
  // }

  // const HamburgerIconOrCancel = !isOpen ? (
  //   <button
  //     onClick={openMenu}
  //     className='flex items-center text-black dark:text-white'
  //     type='button'
  //   >
  //     <FaBars size={30} />
  //   </button>
  // ) : (
  //   <>
  //     <button
  //       onClick={closeMenu}
  //       className='flex items-center text-black dark:text-white'
  //       type='button'
  //     >
  //       <FaTimes size={30} />
  //     </button>
  //   </>
  // )

  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full dark:bg-white bg-black transition ease transform duration-300`

  const HamburgerIconOrCancel = (
    <button
      className='flex flex-col justify-center items-center group'
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? 'rotate-45 translate-y-3 opacity-50 group-hover:opacity-100'
            : 'opacity-50 group-hover:opacity-100'
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? '-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100'
            : 'opacity-50 group-hover:opacity-100'
        }`}
      />
    </button>
  )

  return (
    <div className='fixed w-full h-auto dark:bg-gradient-to-r from-zinc-700 to-zinc-900 bg-gray-100 z-50 pt-2'>
      <div className='flex items-center justify-between text-xl w-full'>
        <Logo />
        <div className='flex items-center'>
          <div className='hidden md:flex gap-5'>
            <a
              href='#projects'
              className='text-black dark:text-white bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:text-transparent  dark:hover:text-transparent'
            >
              Projects
            </a>
            <Modal />
            <a
              href='mailto:dmojarro2001@gmail.com'
              className='text-black dark:text-white bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:text-transparent  dark:hover:text-transparent'
            >
              Contact
            </a>
          </div>
          <DarkMode />
          <div className='md:hidden flex mr-5'>{HamburgerIconOrCancel}</div>
        </div>
      </div>
      {isOpen ? <HamburguerMenu /> : null}
    </div>
  )
}

export default NavBar
