import UseDarkMode from '../hook/UseDarkMode.js'
import { FaRegLightbulb, FaRegMoon } from 'react-icons/fa'

function DarkMode() {
  const [colorTheme, setTheme] = UseDarkMode()

  return (
    <div>
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
  )
}

export default DarkMode
