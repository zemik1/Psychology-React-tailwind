function Footer() {
    let year = new Date().getFullYear()

    return (
        <div className='max-w-[1240px] flex justify-center items-center mx-auto'>
            <p className='text-[#00df9a] py-4'>{'© Zemik\n' + year}</p>
        </div>
    )
}

export default Footer