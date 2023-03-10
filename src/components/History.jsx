import React, { useEffect } from 'react'
import Container from '../templates/Container'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const History = () => {

    const animation = useAnimation()
    const [scoutRef, scoutView] = useInView({ triggerOnce: true, threshold: 1 })

    const textOptions = {
        triggerOnce: true,
        threshold: 0.5
    }

    const [titleRef, titleView] = useInView(textOptions)
    const [secRef, secView] = useInView(textOptions)


    useEffect(() => {
        if (scoutView) {
            sequence()
        }
    }, [scoutView])


    async function sequence() {
        await animation.start({ opacity: 1, y: [200, -20, 20], transition: { duration: 2 } })
        animation.start({
            y: [20, -20],
            transition: {
                repeat: Infinity,
                ease: 'easeInOut',
                repeatType: 'reverse',
                duration: 1.5
            }
        })

    }

    return (
        <Container>
            <div className='flex items-center justify-center text-main flex-col lg:flex-row gap-y-5'>
                <div className='w-full relative'>
                    <img src="/started.webp" alt="Started" ref={scoutRef}></img>
                    <motion.img initial={{ y: 200 }} animate={animation} src="/startedscout.webp" alt="Scout" className='absolute lg:bottom-[-4rem] md:bottom-[-2rem] bottom-0 lg:w-[25rem] md:w-[20rem] w-[50%] lg:right-[-4rem] right-0'></motion.img>
                </div>
                <div className='w-full flex items-center justify-center flex-col gap-y-10'>
                    <motion.h1 initial={{opacity: 0}} animate={ titleView ? {opacity: 100} : {}} transition={{duration: 0.5}} className='font-aot lg:text-6xl text-4xl w-[15rem] text-center lg:leading-[4rem] leading-[3rem]' ref={titleRef}>In a City Surrounded By titans</motion.h1>

                    <motion.div initial={{opacity: 0}} animate={ secView ? {opacity: 100} : {}} transition={{duration: 0.5}} className='font-pop flex flex-col gap-y-10 max-w-[30rem] lg:max-w-[18rem] xl:max-w-[24rem] text-justify lg:text-lg text-sm text-white' ref={secRef}>
                        <p className='indent-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. </p>
                    </motion.div>

                </div>
            </div>
        </Container>
    )
}

export default History