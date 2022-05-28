import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

const Navbar = () => {
    //darkmode using themechanger framework
    /*const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    const renderThemeChanger = () => {
        if(!mounted) return null;
        const currentTheme = theme === 'system' ? systemTheme : theme;
        if(currentTheme === 'dark'){
            return (
                <Button onClick={() => setTheme('light')}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                    </svg>
                </Button>
            )
        } else {
            return(
                <Button onClick={() => setTheme('dark')}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                </Button>
            )
        }
        {renderThemeChanger()}
    }*/
    
    return ( 
        <header className='h-16 flex items-center justify-between blur-backdrop-filter shadow bg-opacity-80' style={{paddingLeft:'35%', paddingRight:'35%'}}>
            <div style={{display:'flex', alignItems:'center'}}>
                <span className='rotate-icon mt-1'><Image src='/favicon.png' alt='cat' width={23} height={20} /></span>
                <h1 className='font-bold text-white'><Link href='/'>Felipe Elias Rech</Link></h1>
            </div>
            <ul className='flex gap-4'>
                <li><Link href='/works'><a className='underline-hover-effect font-semibold text-white'>Works</a></Link></li>
                <div style={{display:'flex', alignItems:'center'}}>
                    <span style={{flexBasis:'20%', marginRight:'4px', marginTop:'3px'}}><Image src='/github-light.png' width={32} height={32} alt='Github' /></span>
                    <span><Link href='https://github.com/felipeeliasrech'><a className='underline-hover-effect font-semibold text-white' target='_blank'>Source</a></Link></span>
                </div>
            </ul>
        </header>
     );
}
 
export default Navbar;