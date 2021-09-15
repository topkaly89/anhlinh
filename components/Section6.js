import { useEffect, useState } from 'react'
import Parallax from "parallax-js"
import { motion } from 'framer-motion';
import Image from 'next/image'

// Social logos
import telegram from '../public/socials/telegram.svg'
import youtube from '../public/socials/youtube.svg'
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
        <div className="section fp-auto-height w-full bg is_footer">
            <div className="section-footer">
                <div className="header-bottom-border"></div>
                
                <div className="footer-body flex items-center">
                    <div className="footer-text">Copyright © 2021 AstroV. All rights reserved.</div>
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
                        >
                            <Image src={youtube} width={18} height={18} />
                        </motion.a>
                    </div>
                </div>
            </div>
        </div>
    )
}