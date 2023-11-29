import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {useState} from "react";
import '../../index.css'
import {NavLink} from "react-router-dom";

function NavBar() {
    const activeLink = 'nav-list__link nav-list__link--active'
    const normalLink = 'nav-list__link'

    const [nav, setNav] = useState(false)

    function navHandler() {
        setNav(!nav)
    }

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'><a href='/Main'>Psychology</a></h1>
            <ul className='hidden md:flex'>
                <div className='py-4 pr-4'>
                    <NavLink to='/Main' className={({isActive}) => isActive ? activeLink : normalLink}>
                        Главная
                    </NavLink>
                </div>
                <div className='py-4 pr-4'>
                    <NavLink to='/About'
                             className={({isActive}) => isActive ? activeLink : normalLink}>
                        Обо&nbsp;мне
                    </NavLink>
                </div>
                <div className='py-4 pr-4'>
                    <NavLink to='/Contacts'
                             className={({isActive}) => isActive ? activeLink : normalLink}>
                        Контакты
                    </NavLink>
                </div>


            </ul>
            <div onClick={navHandler} className='block md:hidden'>
                {!nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20}/>}
            </div>
            <div
                className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Psychology</h1>
                <ul className='uppercase p-4'>
                    <li className='p-4 border-b border-gray-600'><a href='/Main'>Главная</a></li>
                    <li className='p-4 border-b border-gray-600'><a href='/About'>Обо&nbsp;мне</a></li>
                    <li className='p-4 border-b border-gray-600'><a href='/Contacts'>Контакты</a></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar