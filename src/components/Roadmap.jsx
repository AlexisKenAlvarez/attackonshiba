import React from 'react'
import { PhaseLeft, PhaseRight } from '../templates/Phase'

const Roadmap = () => {

    return (
        <section className='w-full h-auto min-h-screen relative bg-gradient-to-b from-myblack to-[#523531]'>
            <div className='absolute w-full h-full bg-topog bg-[length:400px_400px] shadow-road'></div>

            <div className='w-full h-auto mx-auto max-w-[1700px] px-10 text-main pt-24 z-10 relative pb-28'>
                <h1 className='font-aot lg:text-6xl text-5xl text-center'>Our Roadmap</h1>
                <div className='mt-10 flex flex-col pt-20'>

                    <PhaseLeft label="Phase 1" image="phase1"/>
                    <PhaseRight label="Phase 2" image="phase2" />
                    <PhaseLeft label="Phase 3"  image="phase3"/>
                    <PhaseRight label="Phase 4" image="phase4" />

                </div>
            </div>
        </section>
    )
}

export default Roadmap