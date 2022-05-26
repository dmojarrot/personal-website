import React from 'react'
import Card from './Card.jsx'
import Projects from './Projects.jsx'
import NavBar from './NavBar.jsx'
import Skills from './Skills.jsx'
import { Fade, Flip } from 'react-reveal/'

function App() {
  return (
    <div className='dark:bg-gradient-to-r from-zinc-700 to-zinc-900 bg-gray-100'>
      <NavBar />
      <Fade left>
        <div className='flex justify-center pt-20'>
          <Card />
        </div>
      </Fade>
      {/* <div className='pt-24'>
        <Skills />
      </div> */}
      <Projects />
    </div>
  )
}

export default App
