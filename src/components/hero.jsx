import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion';

const Hero = () => {
    const animation = useAnimation()

    useEffect(() => {
        sequence()
    }, [])


    async function sequence() {
        await animation.start({ opacity: 1, y: [200, -20, 20], x: [100, 0, 0], transition: { duration: 2 } })
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

    const variants = {
        initial: {
            x: "-100%",
            opacity: 0,

        },
        animate: {
            x: "0%",
            opacity: 100,
            transition: {
                duration: 1,
            }
        },
    }

    return (
        <section className='w-full h-screen min-h-[600px] overflow-hidden relative flex flex-col bg-main sm:gap-y-7 gap-y-3 sm:justify-start justify-between bg-hero bg-cover md:bg-right sm:bg-[center_right_-10rem] z-10'>
            <div className='absolute top-0 w-full h-2 bg-button shadow-upper'></div>

            <div className='w-full max-w-[1700px] mx-auto sm:px-14 mt-14 relative h-[20%] '>
                <div className='text-button md:text-6xl font-bold text-4xl absolute bottom-0 mx-auto left-0 right-0 w-fit sm:auto sm:right-auto sm:w-auto sm:px-12'>
                    <motion.div variants={variants} animate="animate" initial="initial" className='flex items-center gap-x-3'>
                        <img src="/aotlogo.webp" alt="logo" className='w-16'></img>
                        <h1 className='font-noto'>柴犬の攻撃</h1>
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: -100 }} animate={{ opacity: 100, y: 0 }} transition={{ delay: 0.8, duration: 2, type: "spring", stiffness: 200 }} className='font-aot font-medium'>Attack On Shiba</motion.h1>
                </div>

            </div>
            <div className='max-w-[1700px] mx-auto w-full'>
                <div className='w-fit h-[65%] bg-cover font-noto text-main sm:px-14 pt-14 xl:pt-16 flex absolute mx-auto left-0 right-0 sm:left-auto sm:right-auto bottom-0'>
                    <div className='max-w-[1580px] w-full mx-auto'>
                        <div className=' w-full mx-auto z-10 relative'>
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 100 }} transition={{ duration: 1, delay: 0.9 }} className='md:max-w-[550px] xl:text-lg md:text-sm text-xs max-w-[290px] leading-4 text-center sm:text-left mx-auto font-pop'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </motion.p>

                            <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 100, y: 0 }} transition={{ delay: 1, duration: 2, ease: [.21, 1.03, .27, 1] }} className='mt-9 flex gap-x-3 gap-y-3 text-xs md:text-md xl:text-lg'>
                                <div className='w-fit h-auto px-10 py-3 bg-button cursor-pointer hover:bg-buttonHover transition-all ease-in-out duration-300'>
                                    <p>Buy token</p>
                                </div>
                                <div className='w-fit h-auto px-10 py-3 cursor-pointer text-main bg-none border-[1px] border-main hover:bg-main hover:text-button transition-all ease-in-out duration-300'>
                                    <p>Chart</p>
                                </div>
                            </motion.div>
                        </div>

                        <div className='w-full'>

                        </div>
                    </div>
                </div>
            </div>


            <motion.img animate={animation} src="/heronew.webp" alt="Hero" className='absolute lg:bottom-16 lg:right-16 sm:bottom-10 sm:right-10 sm:top-auto top-[20vh] right-[-13rem] left-0 sm:left-auto mx-auto z-0 lg:w-[70vh] sm:w-[25rem] w-[10rem] pointer-events-none'>

            </motion.img>
        </section>
    )
}

export default Hero