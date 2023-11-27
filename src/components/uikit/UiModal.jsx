import oneList from '../../assets/1.jpg'
import twoList from '../../assets/2.jpg'
import thirdList from '../../assets/3.jpg'
import {AiOutlineClose} from "react-icons/ai";

function UiModal(props) {

    function closeModalHandler() {
        props.modal()
    }

    return (
        <div
            className='fixed hiden overflow-y-auto overflow-x-hidden outline-none inset-0 bg-gray-700/60 backdrop-blur pt-10 pb-10'>
            <div className='fixed inset-0 overflow-y-auto bg-white rounded-lg md:w-[700px] sm:w-[390px] flex flex-nowrap justify-center mx-auto p-10'>
                <div>
                    <img src={oneList} alt="1"/>
                    <img src={twoList} alt="2"/>
                    <img src={thirdList} alt="3"/>
                </div>
                <div>
                    <AiOutlineClose onClick={closeModalHandler} size={30}/>
                </div>
            </div>
        </div>
    )
}

export default UiModal