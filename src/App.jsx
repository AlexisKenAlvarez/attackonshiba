import React from 'react'
import Features from './components/features'
import Hero from './components/hero'
import History from './components/History'
import Container from './templates/Container'

const App = () => {
    return (
        <>
            <Hero />
            <Features />
            <History />
            <section className='w-full h-full  py-20 relative md:bg-main bg-tokenbg'>

                <div className='md:block hidden absolute lg:top-0 top-[-10rem] bottom-0 my-auto w-full bg-tokenbg lg:h-[55%] h-[60%] z-0'></div>

                <div className='max-w-[1700px] px-10 flex relative z-10 lg:flex-row flex-col gap-y-6'>
                    <div className='w-full flex items-center justify-center'>
                        <div className='lg:w-[22rem] w-[18rem] text-center lg:ml-20'>
                            <h1 className='font-bree text-button lg:text-6xl text-5xl font-bold'>Tokenomics</h1>
                            <div className='font-bree text-[#793B2E] lg:text-6xl text-5xl mt-7 flex justify-between'>
                                <div>
                                    <h2>5%</h2>
                                    <p className='lg:text-3xl text-2xl mt-2'>BUY</p>
                                </div>

                                <div>
                                    <h2>5%</h2>
                                    <p className='lg:text-3xl text-2xl mt-2'>SELL</p>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className='w-full flex items-center justify-center'>
                        <img src="/token.webp" alt="TokenShiba" className='lg:w-[24rem] w-[15rem]'></img>
                    </div>
                </div>
            </section>
        </>
    )
}

export default App