import Typed from 'react-typed'
import {Link} from "react-router-dom";

function Hero() {

    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold p-2 text-xl'>
                    Твой хороший друг для общения
                </p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                    Психология
                </h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4'>Доступная помощь</p>
                    <Typed className='md:text-4xl sm:text-3xl text-xl pl-1 font-bold'
                           strings={[' для Семьи', ' для Взаимоотношений', ' для Развитие']}
                           typeSpeed={120}
                           backSpeed={140}
                           loop
                    />
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500'>Стабильное психологическое состояние
                    невозможно без здорового физического.</p>
                <Link to="/Contacts">
                    <button onClick={redirectHandler}
                            className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#000300]'>Приступить
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Hero