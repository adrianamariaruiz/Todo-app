import { useEffect, useState } from "react"
import IconMoon from "./IconMoon"
import IconSun from "./IconSun"

const initialState = localStorage.getItem('theme') === 'dark';

const Header = () => {

  const [darkMode, setDarkMode] = useState(initialState)

  useEffect(() => {
    console.log('probando')
    if(darkMode){
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }else{
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  
  }, [darkMode])
  

  return (
    <header className='container mx-auto px-4 pt-8 transition-all duration-1000'>
        <div className='flex justify-between'>
            <h1 className='uppercase text-white text-2xl font-semibold tracking-[0.3em]'>todo</h1>
            <button 
              type='button' 
              onClick={() => setDarkMode(!darkMode)}
            >
              {
                darkMode ? <IconSun/> : <IconMoon/>
              }
            </button> 
        </div>
    </header>
  )
}

export default Header