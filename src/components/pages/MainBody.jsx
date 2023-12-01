import About from '../../assets/laptop.jpg'
import {useState} from "react";
import UiModal from "../uikit/UiModal";
import '../../index.css'
import { GiProgression } from "react-icons/gi";



function MainBody() {
    const [modal, setModal] = useState(false)

    function viewModal() {
        setModal(!modal)
    }

    return (
        <>
            <div className='w-full bg-white py-16 px-4'>
                <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                    <img className='w-[500px] mx-auto my-4' src={About} alt="/"/>
                    <div className='mt-[65px] bg-black rounded-lg md:h-[300px] flex flex-col justify-center'>
                        <p className='text-white font-bold text-2xl text-center'>Психолог-консультант коррекции
                            тревожно-фобических
                            расстройств.</p>
                        <h1 className='text-center md:text-3xl sm:text-2xl text-xl font-bold py-2 text-[#00df9a]'>
                            Эксперт по развитию эмоционального интеллекта и стрессоустойчивости
                        </h1>
                        <p className='text-white font-bold text-center'>
                            Лечу тревожно-фобические и панические расстройства с использованием научно-обоснованных
                            методов и обширного практического опыта.</p>
                    </div>
                </div>
            </div>
            <div className='desc w-full bg-white py-16 px-4'>
                <div className='w-full rounded-lg grid md:grid-cols-3 max-w-[1240px] mx-auto'>
                    <div className='md:grid-cols-2 text-center'>
                        <p className='font-bold text-[#00df9a] text-xl flex flex-nowrap justify-center'><GiProgression className='pr-1' size={25}/>СИМПТОМЫ</p>
                        <p className='py-4 font-bold text-white text-xl'>Убираю тревогу, панические атаки, ВСД, ОКР,
                            СРК</p>
                    </div>
                    <div className='md:grid-cols-2 text-center'>
                        <p className='font-bold text-[#00df9a] text-xl flex flex-nowrap justify-center'><GiProgression className='pr-1' size={25}/>ПОДАВЛЕННОСТЬ</p>
                        <p className='py-4 font-bold text-white text-xl'>Разберусь со страхами за здоровье,
                            выгоранием, астенией</p>
                    </div>
                    <div className='md:grid-cols-2 text-center'>
                        <p className='font-bold text-[#00df9a] text-xl flex flex-nowrap justify-center'><GiProgression className='pr-1' size={25}/>СТРАХИ</p>
                        <p className='py-4 font-bold text-white text-xl'>Побеждаю кардиофобию/социофобию и прочие
                            виды фобий</p>
                    </div>
                    <div className='md:grid-cols-2 text-center'>
                        <p className='font-bold text-[#00df9a] text-xl flex flex-nowrap justify-center'><GiProgression className='pr-1' size={25}/>НИЗКАЯ САМООЦЕНКА</p>
                        <p className='py-4 font-bold text-white text-xl'>Помогаю с депрессией, одиночеством и
                            обретением уверенности в себе</p>
                    </div>
                    <div className='md:grid-cols-2 text-center'>
                        <p className='font-bold text-[#00df9a] text-xl flex flex-nowrap justify-center'><GiProgression className='pr-1' size={25}/>ВЗАИМООТНОШЕНИЯ</p>
                        <p className='py-4 font-bold text-white text-xl'>Помогаю наладить отношения с партнером/с
                            родителями/друзьями</p>
                    </div>
                    <div className='md:grid-cols-2 text-center'>
                        <p className='font-bold text-[#00df9a] text-xl flex flex-nowrap justify-center'><GiProgression className='pr-1' size={25}/>РАЗВИТИЕ</p>
                        <p className='py-4 font-bold text-white text-xl '>Формирую навыки стрессоустойчивости,
                            эмоционального интеллекта</p>
                    </div>
                </div>
            </div>
            <div className='w-full bg-white py-16 px-4'>
                <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                    <div className='flex flex-col justify-center'>
                        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                            Тут твоя биография
                        </h1>
                        <p>Помимо коррекции психологических проблем, мы также работаем над режимом дня и образом жизни
                            для
                            повышения уровня здоровья, энергии и ресурсного состояния.</p>
                        <button
                            onClick={viewModal}
                            className='nav-list__link bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]'>
                            Поподробнее
                        </button>
                        {modal && <UiModal modal={viewModal}/>}
                    </div>
                    <img className='w-[500px] mx-auto my-4' src={About} alt="/"/>
                </div>
            </div>
        </>
    )
}

export default MainBody