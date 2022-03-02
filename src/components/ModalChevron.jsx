import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import CV from '../assets/CV_Diego_Mojarro.pdf'
import { FaChevronRight } from 'react-icons/fa'

export default function Modal() {
  function closeModal() {
    setIsOpen(false)
  }
  function openModal() {
    setIsOpen(true)
  }

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={openModal} className='w-full'>
        <p className='cursor-pointer w-full dark:hover:text-white hover:text-black text-gray-500 py-2 rounded-md text-base font-medium flex justify-between'>
          CV
          <FaChevronRight size={20} />
        </p>
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 z-50 overflow-y-auto'
          onClose={closeModal}
        >
          <Dialog.Overlay className='fixed inset-0 backdrop-blur-md backdrop-brightness-50' />
          <div className='min-h-screen px-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0' />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className='inline-block h-screen align-middle'
              aria-hidden='true'
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <div className='inline-block w-full max-w-sm p-6 my-8 overflow-hidden text-center align-middle transition-all transform bg-white shadow-xl rounded-2xl'>
                <Dialog.Title
                  as='h1'
                  className='text-3xl font-semibold leading-10 text-gray-900'
                >
                  CV
                </Dialog.Title>
                <div className='mt-5'>
                  <a
                    href={CV}
                    className='flex justify-center bg-gradient-to-r border font-bold from-purple-400 to-pink-600 text-white py-4 px-4 rounded-lg transform transition duration-500 hover:scale-105 focus:outline-none'
                    download='CV_Diego_Mojarro.pdf'
                  >
                    Download
                  </a>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
