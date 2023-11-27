import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {useState} from "react";

function NavBar() {

    const [nav, setNav] = useState(false)

    function navHandler() {
        setNav(!nav)
    }

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Psychology</h1>
            <ul className='hidden md:flex'>
                <li className='p-4'>Главная</li>
                <li className='p-4'>Обо&nbsp;мне</li>
                <li className='p-4'>Контакты</li>
            </ul>
            <div onClick={navHandler} className='block md:hidden'>
                {!nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20}/>}
            </div>
            <div
                className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Psychology</h1>
                <ul className='uppercase p-4'>
                    <li className='p-4 border-b border-gray-600'>Главная</li>
                    <li className='p-4 border-b border-gray-600'>Обо&nbsp;мне</li>
                    <li className='p-4 border-b border-gray-600'>Контакты</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar