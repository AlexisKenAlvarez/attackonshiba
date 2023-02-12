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
            <section className='w-full h-full bg-main py-20 relative'>

                <div></div>

                <div className='max-w-[1700px] px-10'>
                    <div className=''>
                        <h1 className='font-bree text-button '>Tokenomics</h1>
                    </div>
                    <img src="/token.webp" alt="TokenShiba"></img>
                </div>
            </section>
        </>
    )
}

export default App