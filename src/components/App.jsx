import React from 'react'
import Card from './Card.jsx'
import Projects from './Projects.jsx'
import NavBar from './NavBar.jsx'

function App() {
  return (
    <div className='dark:bg-gradient-to-r from-zinc-700 to-zinc-900 bg-gray-100'>
      <NavBar />
      <div className='flex justify-center pt-20'>
        <Card />
      </div>
      <Projects />
    </div>
  )
}

export default App
