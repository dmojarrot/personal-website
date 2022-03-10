import UseDarkMode from '../hook/UseDarkMode.js'
import { FaRegLightbulb, FaRegMoon } from 'react-icons/fa'

function DarkMode() {
  const [colorTheme, setTheme] = UseDarkMode()

  return (
    <div className='flex m-5'>
      <button onClick={() => setTheme(colorTheme)}>
        {colorTheme === 'light' ? (
          <FaRegLightbulb className='text-white' size={28} />
        ) : (
          <FaRegMoon className='text-black hover:text-purple-500' size={28} />
        )}
      </button>
    </div>
  )
}

export default DarkMode
