import React from 'react'

const Hero = () => {
    return (
        <section className='w-full h-screen min-h-[600px] overflow-hidden relative flex flex-col bg-main sm:gap-y-7 gap-y-3 sm:justify-start justify-between'>
            <div className='absolute top-0 w-full h-2 bg-button shadow-upper'></div>

            <div className='w-full max-w-[1700px] mx-auto sm:px-14 h-[35%] md:mt-28 px-8 relative min-h-[80px]'>
                <div className='text-button md:text-6xl font-bold text-4xl absolute bottom-0'>
                    <div className='flex items-center gap-x-3'>
                        <img src="/aotlogo.webp" alt="logo" className='w-16'></img>
                        <h1 className='font-noto'>柴犬の攻撃</h1>
                    </div>
                    <h1 className='font-bree font-medium'>ATTACK ON SHIBA</h1>
                </div>
                <div>

                </div>
            </div>
            <div className='bg-main bg-hero bg-no-repeat sm:bg-[length:100%_100%] bg-bottom w-full h-full xl:min-h-[450px] min-w-[800px] bg-cover font-noto text-main sm:px-14 px-8 pt-14 xl:pt-16 flex'>
                <div className='max-w-[1580px] w-full mx-auto'>
                    <div className=' w-full mx-auto z-10 relative'>
                        <p className='md:max-w-[550px] xl:text-lg md:text-sm text-xs max-w-[240px] leading-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>

                        <div className='mt-9 flex gap-x-3 flex-col md:flex-row gap-y-3 text-xs md:text-md xl:text-lg'>
                            <div className='w-fit h-auto px-10 py-3 bg-button cursor-pointer hover:bg-buttonHover transition-all ease-in-out duration-300'>
                                <p>Buy token</p>
                            </div>
                            <div className='w-fit h-auto px-10 py-3 cursor-pointer text-main bg-none border-[1px] border-main hover:bg-main hover:text-button transition-all ease-in-out duration-300'>
                                <p>Chart</p>
                            </div>
                        </div>
                    </div>

                    <div className='w-full'>

                    </div>
                </div>

            </div>

            <img src="/hero1.webp" alt="Hero" className='sm:w-[90vh] absolute bottom-0 xl:right-0 right-[-13rem] object-cover sm:h-[100%] min-w-[30rem] z-0'>

            </img>
        </section>
    )
}

export default Hero