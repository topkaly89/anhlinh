import { useEffect, useState } from 'react'
import Parallax from "parallax-js"
import { motion } from 'framer-motion';
import Image from 'next/image'

// Social logos
import telegram from '../public/socials/telegram.svg'
import twitter from '../public/socials/twitter.svg'
import discord from '../public/socials/discord.svg'
import medium from '../public/socials/medium.svg'

const layers = [
    {
        name: "planet_a",
        image: '/planet_a.svg',
        dataDepth: "1",
        position: "right",
        y: "1/2",
        x: 10,
        size: 300,
        rotate: 45
    },
    {
        name: "planet_a2",
        image: '/planet_b.svg',
        dataDepth: "2",
        position: "left",
        y: "1/3",
        x: 10,
        size: 150,
        rotate: 0
    },
    {
        name: "planet_a3",
        image: '/planet_a.svg',
        dataDepth: "1",
        position: "left",
        y: "3/4",
        x: 20,
        size: 80,
        rotate: 12
    }
];

export default function Section2(props) {
    useEffect(() => {
        const scene1 = document.getElementById("scene-1")
        new Parallax(scene1)
        const scene2 = document.getElementById("scene-2")
        new Parallax(scene2)
        const scene3 = document.getElementById("scene-3")
        new Parallax(scene3)
    })

    const [isHovered, setHovered] = useState(false)

    return (
        <div className="section w-full bg is_footer">
            <div className="footer">
            <div className="footer-container">
            <div className="section-header px-30 flex px-44 absolute top-0 py-10 lg:py-20 justify-between w-full z-50 flex-col md:flex-row items-center">
                <div className="section-title text-3xl lg:text-6xl flex items-center">
                    CONTACT
                </div>
                <div className="section-title normal-text flex items-center text-gray-200 hover:text-white transition-all text-lg lg:text-2xl">
                    <a href="mailto:contact@astrov.ventures">contact@astrov.ventures</a>
                </div>
            </div>
            <div className="w-full h-screen absolute top-0 left-0 z-10">
                {
                    layers.map((l, index) => (
                        <div key={index} className={`absolute md:block hidden`} id={`scene-${index+1}`}>
                            <img
                                data-depth={l.dataDepth}
                                src={l.image}
                                alt={l.name}
                                width={l.size+"px"}
                            />
                        </div>
                    ))
                }
            </div>
            <div className="section-body w-full h-screen flex items-center justify-center">
                <a className="absolute z-50 cursor-pointer w-5/12 md:w-auto flex items-center justify-center" href="mailto:contact@astrov.ventures">
                    <motion.img
                        initial={false}
                        animate={{ y: isHovered ? -30 : 0 }}
                        transition={{ ease: "easeOut", duration: 0.5 }}
                        src="/space_ship.svg"
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        className="planet_3"
                    />
                </a>
                <img src="/big_planet.svg" className="absolute z-30 planet_1" />
                <a
                    className="absolute z-40 flex items-center justify-center" href="mailto:contact@astrov.ventures"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    <motion.img
                        src="/normal_planet.svg" className="w-8/12 md:w-auto cursor-pointer planet_2"
                    />
                    <motion.div
                        initial={{ opacity: 0.6 }}
                        animate={{ opacity: isHovered ? 1 : 0.6 }}
                        className="planet_text contact-now normal-text z-50 text-2xl lg:text-4xl font-extrabold absolute bottom-5 lg:bottom-10 text-center w-full"
                    >
                        NOW
                    </motion.div>
                </a>
            </div>

            </div>
            </div>
            <div className="footer-bottom">
            <div className="header-bottom-border"></div>
                
            <div className="footer-body flex items-center">
                <div className="footer-text">Copyright © 2021 ASTROV. All rights reserved.</div>
                <div className="socials flex items-center mb-4">
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
                        href="https://twitter.com/AstrovVentures"
                        target="_blank"
                    >
                        <Image src={twitter} width={18} height={18} />
                    </motion.a>
                </div>
            </div>
            </div>


        </div>
    )
}