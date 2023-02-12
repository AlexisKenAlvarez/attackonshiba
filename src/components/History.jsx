import React from 'react'
import Container from '../templates/Container'

const History = () => {
    return (
        <Container>
            <div className='flex items-center justify-center text-button flex-col lg:flex-row gap-y-5'>
                <div className='w-full'>
                    <img src="/started.webp" alt="Started"></img>
                </div>
                <div className='w-full flex items-center justify-center flex-col gap-y-10'>
                    <h1 className='font-bree lg:text-5xl text-4xl w-[15rem] text-center lg:leading-[4rem] leading-[3rem]'>In a City Surrounded By titans</h1>

                    <div className='font-noto flex flex-col gap-y-10 max-w-[30rem] lg:max-w-[18rem] xl:max-w-[24rem] text-justify font-medium lg:text-lg text-sm'>
                        <p className='indent-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. </p>
                    </div>

                </div>
            </div>
        </Container>
    )
}

export default History