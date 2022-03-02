import React from 'react'
import Card from './Card.jsx'
import Modal from './Modal'
import { FaRegLightbulb, FaRegMoon } from 'react-icons/fa'
import Projects from './Projects.jsx'
import UseDarkMode from '../hook/UseDarkMode.js'

function App() {
  const [colorTheme, setTheme] = UseDarkMode()

  return (
    <div className='dark:bg-gradient-to-r from-zinc-700 to-zinc-900 bg-gray-100'>
      <div className='flex items-center justify-between text-xl pt-2 '>
        <a
          href='/'
          className='ml-4 text-2xl font-bold text-black  dark:bg-clip-text dark:bg-gradient-to-r from-purple-500 to-pink-700 dark:text-transparent'
        >
          @Dmojarrot
        </a>
        <div className='flex'>
          <div className='flex items-center gap-5'>
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

          <button onClick={() => setTheme(colorTheme)}>
            {colorTheme === 'light' ? (
              <FaRegLightbulb className='m-5 text-purple-500' size={28} />
            ) : (
              <FaRegMoon
                className='m-5 text-black hover:text-purple-500'
                size={28}
              />
            )}
          </button>
        </div>
      </div>
      <div>
        <div className='flex justify-center pt-5'>
          <Card />
        </div>
      </div>
      <Projects />
    </div>
  )
}

export default App
