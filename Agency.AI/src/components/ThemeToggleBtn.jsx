import assets from '../assets/assets'

function ThemeToggleBtn({theme, setTheme}) {
  return (
    <>
        <button>
            {
                theme === 'dark' ? (
                    <img 
                    onClick={() => setTheme('light')}
                    className='size-8.5 p-1.5 border border-gray-500 rounded-full cursor-pointer'
                    src={assets.sun_icon} alt="#" />
                ) : (
                    <img 
                    onClick={() => setTheme('dark')}
                    className='size-8.5 p-1.5 border border-gray-500 rounded-full cursor-pointer'
                    src={assets.moon_icon} alt='#'></img>
                )
            }
        </button>
    </>
  )
}

export default ThemeToggleBtn