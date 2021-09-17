import {motion} from 'framer-motion';
import Image from 'next/image';

// Social logos
import telegram from '../public/socials/telegram.svg';
import twitter from '../public/socials/twitter.svg';
import discord from '../public/socials/discord.svg';
import medium from '../public/socials/medium.svg';
import menu from '../public/menu.svg';
import p2e from "../public/socials/p2e.png";

const iconSize = 14;
export default function Section6() {
    return (
        <div className="header w-full">
            <div className="container px-4">
                <div className="relative w-full flex items-center justify-between mb-4">
                    <div className="menu flex items-center hide--desktop">
                        <div className="dropdown">
                            <span><Image src={menu} width={24} height={24} id="menu1"/></span>
                            <div className="dropdown-content">
                                <div className="flex flex-col">
                                    <motion.div
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        transition={{ease: "easeOut", duration: 0.5, delay: 0.8}}
                                        className="moveTo cta-item text-sm mb-3 lg:mb-4 lg:text-md md:text-left text-gray-400 hover:text-white transition-all cursor-pointer"
                                        data-section="2"
                                    >
                                        ABOUT US
                                    </motion.div>
                                    <motion.div
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        transition={{ease: "easeOut", duration: 0.5, delay: 0.9}}
                                        className="moveTo cta-item text-sm mb-3 lg:mb-4 lg:text-md md:text-left text-gray-400 hover:text-white transition-all cursor-pointer"
                                        data-section="3"
                                    >
                                        OUR SERVICES
                                    </motion.div>
                                    <motion.div
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        transition={{ease: "easeOut", duration: 0.5, delay: 1}}
                                        className="moveTo cta-item text-sm mb-3 lg:mb-4 lg:text-md md:text-left text-gray-400 hover:text-white transition-all cursor-pointer"
                                        data-section="4"
                                    >
                                        PORTFOLIO
                                    </motion.div>
                                    <motion.div
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        transition={{ease: "easeOut", duration: 0.5, delay: 1.2}}
                                        className="moveTo cta-item mb-3 lg:mb-4 text-sm lg:text-md md:text-left text-gray-400 hover:text-white transition-all cursor-pointer"
                                        data-section="5"
                                    >
                                        CONTACT US
                                    </motion.div>
                                    <motion.div
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        transition={{ease: "easeOut", duration: 0.5, delay: 1.3}}
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
                            transition={{ease: "easeInOut", duration: 0.5, delay: 0.2}}
                            className="social-item mr-4 flex items-center p-2 rounded-full transition-all bg-background hover:bg-backgroundAction cursor-pointer"
                            href="https://t.me/AstroGamingSocietyVN"
                            target="_blank"
                        >
                            <Image src={telegram} width={iconSize} height={iconSize}/>
                        </motion.a>
                        <motion.a
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{ease: "easeInOut", duration: 0.5, delay: 0.4}}
                            className="social-item mr-4 flex items-center p-2 rounded-full transition-all bg-background hover:bg-backgroundAction cursor-pointer"
                            href="https://discord.gg/vBJvumfvt5"
                            target="_blank"
                        >
                            <Image src={discord} width={iconSize} height={iconSize}/>
                        </motion.a>
                        <motion.a
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{ease: "easeInOut", duration: 0.5, delay: 0.6}}
                            className="social-item mr-4 flex items-center p-2 rounded-full transition-all bg-background hover:bg-backgroundAction cursor-pointer"
                            href="https://medium.com/@astrov.ventures"
                            target="_blank"
                        >
                            <Image src={medium} width={iconSize} height={iconSize}/>
                        </motion.a>
                        <motion.a
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{ease: "easeInOut", duration: 0.5, delay: 0.8}}
                            className="social-item  mr-4 flex items-center p-2 rounded-full transition-all bg-background hover:bg-backgroundAction cursor-pointer"
                            href="https://twitter.com/AstrovVentures"
                            target="_blank"
                        >
                            <Image src={twitter} width={iconSize} height={iconSize}/>
                        </motion.a>
                        <motion.a
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{ease: "easeInOut", duration: 0.5, delay: 1.0}}
                            className="social-item  mr-4 flex items-center p-2 rounded-full transition-all bg-background hover:bg-backgroundAction cursor-pointer"
                            href="https://p2enews.com"
                            target="_blank"
                        >
                            <Image src={p2e} width={iconSize} height={iconSize}/>
                        </motion.a>

                    </div>
                </div>
            </div>
        </div>
    )
}