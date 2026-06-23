import assets from '../assets/assets'

function ThemeToggleBtn({theme, setTheme}) {
  return (
    <button
      type='button'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className='size-8.5 p-1.5 border border-gray-500 rounded-full cursor-pointer'
      aria-label='Toggle theme'
    >
      <img
        src={theme === 'dark' ? assets.sun_icon : assets.moon_icon}
        alt={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        className='w-6 h-6'
      />
    </button>
  )
}

export default ThemeToggleBtn