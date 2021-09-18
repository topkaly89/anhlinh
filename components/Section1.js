import Image from 'next/image'
import {motion} from "framer-motion"


export default function Section1() {
    //var fullpageApi = props.fullpageApi

    return (
        <div className="section bg" data-section="1" >
            <div className="w-full flex flex-col">
                <div className="container px-4">
                    <div className="astrov-body mx-auto h-screen flex items-center justify-center flex-col">

                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{ease: "easeOut", duration: 0.5, delay: 0.3}}
                            className="logo w-1/2"
                        >
                            <img src='/logo.png'/>
                            <motion.div
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{ease: "easeOut", duration: 0.5, delay: 0.6}}
                                className="w-full hide--mobile" id="menulist">
                                <div className="main-cta flex flex-col mt-10 lg:mt-12">
                                    <motion.div
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        transition={{ease: "easeOut", duration: 0.5, delay: 0.8}}
                                        className="moveTo cta-item mb-2 lg:mb-4 lg:text-md text-gray-400 hover:text-white transition-all cursor-pointer"
                                        data-section="2"
                                    >
                                        ABOUT US
                                    </motion.div>
                                    <motion.div
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        transition={{ease: "easeOut", duration: 0.5, delay: 0.9}}
                                        className="moveTo cta-item mb-2 lg:mb-4 lg:text-md text-gray-400 hover:text-white transition-all cursor-pointer"
                                        data-section="3"
                                    >
                                        OUR SERVICES
                                    </motion.div>
                                    <motion.div
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        transition={{ease: "easeOut", duration: 0.5, delay: 1}}
                                        className="moveTo cta-item mb-2 lg:mb-4 lg:text-md text-gray-400 hover:text-white transition-all cursor-pointer"
                                        data-section="4"
                                    >
                                        PORTFOLIO
                                    </motion.div>
                                    <motion.div
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        transition={{ease: "easeOut", duration: 0.5, delay: 1.2}}
                                        className="moveTo cta-item mb-2 lg:mb-4 lg:text-md  text-gray-400 hover:text-white transition-all cursor-pointer"
                                        data-section="5"
                                    >
                                        CONTACT US
                                    </motion.div>
                                    <motion.div
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        transition={{ease: "easeOut", duration: 0.5, delay: 1.3}}
                                        className="moveTo cta-item  lg:text-md text-gray-400 hover:text-white transition-all cursor-pointer"
                                    >
                                        ASTRONAUT CLUB (COMING SOON)
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </div>
    )
}