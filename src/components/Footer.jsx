import React from 'react'
import { SiTwitter } from 'react-icons/si'
import { FaTelegramPlane } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='w-full py-20 bg-bottombg h-auto relative pb-32'>
            <div className='max-w-[1700px] h-auto mx-auto w-full md:px-32 flex justify-between items-center lg:flex-row flex-col'>
                <img alt="AotLogo" src="/aotlogo.webp" className='w-[12rem]'></img>
                <div className='text-main'>
                    <h1 className='font-aot lg:text-5xl text-4xl lg:mt-0 mt-5'>Our Social Links</h1>
                    <div className='flex gap-x-4 text-2xl mt-3 w-fit mx-auto lg:mx-0'>
                        <SiTwitter className='cursor-pointer hover:scale-[1.1] transition-all ease-in-out duration-300' />
                        <FaTelegramPlane className='cursor-pointer hover:scale-[1.1] transition-all ease-in-out duration-300' />
                    </div>
                </div>
            </div>

            <div className='w-full h-12 bg-button absolute bottom-0 flex text-white font-noto items-center justify-center'>
                <p className='lg:text-sm t text-[10px]'>COPYRIGHT ATTACK ON SHIBA. 2023. ALL RIGHT RESERVED</p>
            </div>
        </footer>
    )
}

export default Footer