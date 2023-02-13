import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

export const PhaseLeft = ({ label }) => {

    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 })
    const [refCirc, inViewCirc] = useInView({ triggerOnce: true, threshold: 1 })


    return (
        <div className='max-w-[1000px] mx-auto flex pb-[14rem] relative pl-14 md:pl-0'>

            <div className='absolute left-0 md:right-0 mx-auto h-full w-5'>
                <div className='absolute left-0 right-0 mx-auto w-[2px] h-full bg-line top-5'></div>

                <div className='absolute left-0 right-0 mx-auto w-[3px] h-0 bg-main top-5 transition-all ease-in-out duration-700' style={inView ? { height: "100%" } : {}}></div>


                <div className='w-3 h-3 rounded-full bg-line absolute left-0 right-0 mx-auto top-2 transition-all ease-in-out duration-700' style={inViewCirc ? { backgroundColor: "#F0E4B4", scale: "1.4" } : {}}></div>
            </div>


            <motion.div initial={{opacity: 0}} animate={ inViewCirc ? {opacity: 100, y: [100, 0]} : {}} transition={{duration: 1.5, ease: [.21, 1.03, .27, 1]}} className='text-main md:w-[45%] md:text-right'>
                <h1 className='font-rye text-3xl uppercase text-[#C4B05E]'>{label}</h1>
                <p className='font-noto mt-2 text-lg' ref={refCirc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </motion.div>
            <div className='w-5 h-5 absolute bottom-[-9.5rem]' ref={ref}></div>

        </div>
    )
}

export const PhaseRight = ({ label }) => {

    const [ref, inView] = useInView({ triggerOnce: true, threshold: 1 })
    const [refCirc, inViewCirc] = useInView({ triggerOnce: true, threshold: 0.9 })


    return (
        <div className='max-w-[1000px] mx-auto flex md:justify-end pb-[14rem] relative pl-14 md:pl-0'>

            <div className='absolute left-0 md:right-0 mx-auto h-full w-5'>
                <div className='absolute left-0 right-0 mx-auto w-[2px] h-full bg-line top-5' style={label === "Phase 4" ? { display: "none" } : { display: "block" }}></div>

                <div className='absolute left-0 right-0 mx-auto w-[3px] h-0 bg-main top-5 transition-all ease-in-out duration-700' style={label === "Phase 4" ? { display: "none" } : inView ? { height: "100%" } : {}}></div>

                <div className='w-3 h-3 rounded-full bg-line absolute left-0 right-0 mx-auto top-2 transition-all ease-in-out duration-700' style={inViewCirc ? { backgroundColor: "#F0E4B4", scale: "1.4" } : {}}></div>
            </div>

            <motion.div initial={{opacity: 0}} animate={ inViewCirc ? {opacity: 100, y: [100, 0]} : {}} transition={{duration: 1.5, ease: [.21, 1.03, .27, 1]}} className='text-main md:w-[45%] text-left'>
                <h1 className='font-rye text-3xl uppercase text-[#C4B05E]'>{label}</h1>
                <p className='font-noto mt-2 text-lg' ref={refCirc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </motion.div>

            <div className='w-5 h-5 bg-transparent absolute bottom-[-9.5rem]' ref={ref} style={label === "Phase 4" ? { bottom: "12rem" } : []}></div>

        </div>
    )
}
