function About(){
    return(
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto flex'>
                <div className='flex flex-col justify-center mx-auto items-center'>
                    <p className='md: text-2xl sm:text-5xl py-4 text-gray-600 font-bold'>Telegram:<a href='https://t.me/brokerHusher'>Тут твой Тг</a></p>
                    <p className='md: text-2xl sm:text-5xl  py-4 text-gray-600 font-bold'>Email:<a href='#'>Тут твоя почта</a></p>
                    <p className='md: text-2xl sm:text-5xl py-4 text-gray-600 font-bold'>VK:<a href='https://vk.com/yuliyapodgorodova'>Юля Подгородова</a></p>
                    <p className='md: text-2xl sm:text-5xl py-4 text-gray-600 font-bold'>Instagram:<a href=''>Тут твоя инста</a></p>
                    <p className='md: text-2xl sm:text-5xl py-4 text-gray-600 font-bold'>Whatsapp:<a href='#'>Тут твой ватсап</a></p>
                </div>
            </div>
        </div>
    )
}
export default About