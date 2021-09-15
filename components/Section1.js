import Image from 'next/image'
import { motion } from "framer-motion"

// Social logos
import telegram from '../public/socials/telegram.svg'
import youtube from '../public/socials/youtube.svg'
import discord from '../public/socials/discord.svg'
import medium from '../public/socials/medium.svg'
import menu from '../public/menu.svg'

export default function Section1() {
    //var fullpageApi = props.fullpageApi

    return (
        <div className="section bg" data-anchor="page1">
            <div className="w-full flex flex-col">
                <div className="container px-4">
                    <div className="astrov-body mx-auto h-screen flex items-center justify-center flex-col">
                    <div className="header py-4 w-full">
                        <div className="flex items-center justify-between mb-4">
                            <div className="menu flex items-center hide--desktop">
                            <div class="dropdown">
                            <span><Image src={menu} width={24} height={24} id="menu1"/></span>
                            <div class="dropdown-content">
                                <div className="flex flex-col">
                                    <motion.div
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        transition={{ ease: "easeOut", duration: 0.5, delay: 0.8 }}
                                        className="cta-item text-sm mb-3 lg:mb-4 lg:text-md md:text-left text-gray-400 hover:text-white transition-all cursor-pointer"
                                    >
                                        ABOUT US
                                    </motion.div>
                                    <motion.div
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        transition={{ ease: "easeOut", duration: 0.5, delay: 0.9 }}
                                        className="cta-item text-sm mb-3 lg:mb-4 lg:text-md md:text-left text-gray-400 hover:text-white transition-all cursor-pointer"
                                    >
                                        > OUR SERVICES
                                    </motion.div>
                                    <motion.div
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        transition={{ ease: "easeOut", duration: 0.5, delay: 1 }}
                                        className="cta-item text-sm mb-3 lg:mb-4 lg:text-md md:text-left text-gray-400 hover:text-white transition-all cursor-pointer"
                                    >
                                        > PORTFOLIO
                                    </motion.div>
                                    <motion.div
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        transition={{ ease: "easeOut", duration: 0.5, delay: 1.2 }}
                                        className="cta-item mb-3 lg:mb-4 text-sm lg:text-md md:text-left text-gray-400 hover:text-white transition-all cursor-pointer"
                                        id="moveTo5"
                                        //onClick={() => fullpageApi.moveSectionDown()}
                                    >
                                        CONTACT US
                                    </motion.div>
                                    <motion.div
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        transition={{ ease: "easeOut", duration: 0.5, delay: 1.3 }}
                                        className="cta-item text-sm lg:text-md md:text-left text-gray-400 hover:text-white transition-all cursor-pointer"
                                    >
                                        ASTRONAUT CLUB (COMING SOON)
                                    </motion.div>
                                </div>
                            </div>
                            </div>
                                
                            </div>
                            <div className="socials flex items-center">
                                <motion.a
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
                                    className="social-item mr-4 flex items-center p-2 rounded-full transition-all bg-background hover:bg-backgroundAction cursor-pointer"
                                    href="https://t.me/AstroGamingSocietyVN"
                                    target="_blank"
                                >
                                    <Image src={telegram} width={18} height={18} />
                                </motion.a>
                                <motion.a
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
                                    className="social-item mr-4 flex items-center p-2 rounded-full transition-all bg-background hover:bg-backgroundAction cursor-pointer"
                                    href="https://discord.gg/vBJvumfvt5"
                                    target="_blank"
                                >
                                    <Image src={discord} width={18} height={18} />
                                </motion.a>
                                <motion.a
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{ ease: "easeInOut", duration: 0.5, delay: 0.7 }}
                                    className="social-item mr-4 flex items-center p-2 rounded-full transition-all bg-background hover:bg-backgroundAction cursor-pointer"
                                    href="https://medium.com/@astrov.ventures"
                                    target="_blank"
                                >
                                    <Image src={medium} width={18} height={18} />
                                </motion.a>
                                <motion.a
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{ ease: "easeInOut", duration: 0.5, delay: 0.9 }}
                                    className="social-item flex items-center p-2 rounded-full transition-all bg-background hover:bg-backgroundAction cursor-pointer"
                                >
                                    <Image src={youtube} width={18} height={18} />
                                </motion.a>
                            </div>
                        </div>
                        <div className="header-bottom-border"></div>
                    </div>
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{ ease: "easeOut", duration: 0.5, delay: 0.3 }}
                            className="logo w-1/2 mb-10 lg:mb-12"
                        >
                            <img src='/logo.png' />
                        </motion.div>
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{ ease: "easeOut", duration: 0.5, delay: 0.6 }}
                            className="w-full hide--mobile" id="menulist">
                            <div className="text-3xl md:text-5xl lg:text-6xl select-none d-none">TAKE OFF AND GO BEYOND</div>
                            <div className="main-cta flex flex-col mt-10 lg:mt-12">
                                <motion.div
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{ ease: "easeOut", duration: 0.5, delay: 0.8 }}
                                    className="cta-item text-sm mb-3 lg:mb-4 lg:text-md md:text-left text-gray-400 hover:text-white transition-all cursor-pointer"
                                >
                                    ABOUT US
                                </motion.div>
                                <motion.div
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{ ease: "easeOut", duration: 0.5, delay: 0.9 }}
                                    className="cta-item text-sm mb-3 lg:mb-4 lg:text-md md:text-left text-gray-400 hover:text-white transition-all cursor-pointer"
                                >
                                    > OUR SERVICES
                                </motion.div>
                                <motion.div
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{ ease: "easeOut", duration: 0.5, delay: 1 }}
                                    className="cta-item text-sm mb-3 lg:mb-4 lg:text-md md:text-left text-gray-400 hover:text-white transition-all cursor-pointer"
                                >
                                    > PORTFOLIO
                                </motion.div>
                                <motion.div
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{ ease: "easeOut", duration: 0.5, delay: 1.2 }}
                                    className="cta-item mb-3 lg:mb-4 text-sm lg:text-md md:text-left text-gray-400 hover:text-white transition-all cursor-pointer"
                                    id="moveTo5"
                                    //onClick={() => fullpageApi.moveSectionDown()}
                                >
                                    CONTACT US
                                </motion.div>
                                <motion.div
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{ ease: "easeOut", duration: 0.5, delay: 1.3 }}
                                    className="cta-item text-sm lg:text-md md:text-left text-gray-400 hover:text-white transition-all cursor-pointer"
                                >
                                    ASTRONAUT CLUB (COMING SOON)
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}