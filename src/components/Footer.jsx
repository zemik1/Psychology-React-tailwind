function Footer() {
    let year = new Date().getFullYear()

    return (
        <div className='max-w-[1240px] flex justify-center items-center mx-auto text-gray-300'>
            <p className='text-white py-4'>{'©' + 'Земницкий Данил\n' + year}</p>
        < /div>
    )
}

export default Footer