import React from 'react'

import JSLogo from '../assets/javascript-icon.svg'
import ReactLogo from '../assets/reactjs-icon.svg'
import NextLogo from '../assets/nextjs-icon.svg'
import TailwindLogo from '../assets/tailwindcss-icon.svg'
import NLogo from '../assets/nodejs-icon.svg'
import CLogo from '../assets/cpp-icon.svg'
import FLogo from '../assets/firebase-icon.svg'
import SUILogo from '../assets/swift-icon.svg'
import PLogo from '../assets/python-icon.svg'

const Technologies = [
  { key: 1, content: <img src={ReactLogo} alt='1' /> },
  { key: 2, content: <img src={NextLogo} alt='2' /> },
  { key: 3, content: <img src={TailwindLogo} alt='3' /> },
  { key: 4, content: <img src={SUILogo} alt='4' /> },
  { key: 5, content: <img src={JSLogo} alt='5' /> },
  { key: 6, content: <img src={NLogo} alt='6' /> },
  { key: 7, content: <img src={CLogo} alt='7' /> },
  { key: 8, content: <img src={PLogo} alt='8' /> },
  { key: 9, content: <img src={FLogo} alt='9' /> },
]

function Skills() {
  return (
    <div className='mx-5 pb-5'>
      <h2
        className='dark:text-white text-black text-3xl font-semibold pt-20 pb-5 pl-5'
        id='skills'
      >
        Skills
      </h2>
      <div className='max-w-2xl mx-auto lg:max-w-none dark:bg-black bg-white rounded-3xl w-full shadow-lg p-5'></div>
    </div>
  )
}

export default Skills
