import MoonIcon from "./MoonIcon"


const Header = () => {
  return (
    <header className='container mx-auto px-4 pt-8'>
        <div className='flex justify-between'>
            <h1 className='uppercase text-white text-2xl font-semibold tracking-[0.3em]'>todo</h1>
            <button type='button'><MoonIcon/></button> 
        </div>
    </header>
  )
}

export default Header