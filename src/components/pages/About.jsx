import { SlSocialVkontakte } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";
import { FaViber } from "react-icons/fa";



function About() {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto md:flex sm:flex-nowrap'>
                <div className='md:w-[730px] sm:w-[300px] mx-auto'>
                    <p className='md:text-4xl sm: text-3xl font-bold'>
                        Консультации проходят в формате видео-конференции через любое удобное приложение</p>
                    <p className='text-gray-600 text-xl font-bold py-4'>
                        Продолжительность сессии: 55 минут</p>
                    <p className='text-gray-400 font-bold'>Предварительная оплата производится минимум за 4 часа до сессии</p>
                </div>
                <div className='flex flex-col justify-center mx-auto items-center'>
                    <button
                        className='flex flex-nowrap justify-center items-center bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]'><FaViber size={30}/>
                        Viber
                    </button>
                    <button
                        className='flex flex-nowrap justify-center items-center bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]'><BiLogoTelegram size={30}/>
                        Telegram
                    </button>
                    <button
                        className='flex flex-nowrap justify-center items-center bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]'><SlSocialVkontakte size={30}/>
                        Вконтакте
                    </button>
                    <button
                        className='flex flex-nowrap justify-center items-center bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]'><FaWhatsapp size={30}/>
                        Whatsapp
                    </button>
                </div>

            </div>
        </div>
    )
}

export default About