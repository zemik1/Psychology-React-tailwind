import About from '../assets/laptop.jpg'

function MainBody() {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={About} alt="/"/>
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold'>Психолог-консультант коррекции тревожно-фобических
                        расстройств</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                        Можно что то про психологию
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem distinctio maxime modi natus qui
                        sint. Autem, et expedita, iure iusto nam nulla odio porro provident quo quod tenetur vitae
                        voluptates?
                    </p>
                    <button
                        className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]'>Приступить
                    </button>
                </div>
            </div>

        </div>
    )
}

export default MainBody