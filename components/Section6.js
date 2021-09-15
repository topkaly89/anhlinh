import { motion } from 'framer-motion';
import Image from 'next/image'

// Social logos
import telegram from '../public/socials/telegram.svg'
import twitter from '../public/socials/twitter.svg'
import discord from '../public/socials/discord.svg'
import medium from '../public/socials/medium.svg'


export default function Section6() {
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
                            <Image src={twitter} width={18} height={18} />
                        </motion.a>
                    </div>
                </div>
            </div>
        </div>
    )
}