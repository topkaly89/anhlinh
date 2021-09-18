import {motion, useAnimation} from 'framer-motion';
import Image from 'next/image'


import s4 from '../public/s4.svg'
import s5 from '../public/s5.svg'
import s6 from '../public/s6.svg'
import coin98 from '../public/coin98svg.svg'
import defi from '../public/defiwarrior.svg'
import {useEffect, useRef} from "react";
import useOnScreen from "../util/utils";

let animated = false;
export default function Section5() {
    const firstImage = useAnimation();
    const secondImage = useAnimation();
    const thirdImage = useAnimation();

    const rootRef = useRef();
    const onScreen = useOnScreen(rootRef);
    const whileHover = {
        boxShadow: "0 0 25px 10px rgb(255 255 255)",
        transition:{
            type: 'spring', velocity: 100, mass:0.5}
    }
    useEffect(async () => {
        if (onScreen && !animated) {
            firstImage.start({
                initial: {
                    boxShadow: "none",
                },
                boxShadow: "0 0 25px 10px rgb(255 255 255)",
                transition: {ease: "easeOut", duration: 0.4, delay: 0.2, repeat: 0},
                transitionEnd:{
                    boxShadow: "none",
                }

            });
            secondImage.start({
                initial: {
                    boxShadow: "none",
                },
                boxShadow: "0 0 25px 10px rgb(255 255 255)",
                transition: {ease: "easeOut", duration: 0.4, delay: 0.6},
                transitionEnd:{
                    boxShadow: "none",
                }
            });
            thirdImage.start({
                initial: {
                    boxShadow: "none",
                },
                boxShadow: "0 0 25px 10px rgb(255 255 255)",
                transition: {ease: "easeOut", duration: 0.4, delay: 1},
                transitionEnd:{
                    boxShadow: "none",
                }
            });
            animated = true;
        }
    }, [onScreen]);
    return (
        <div className="section w-full bg_rotate">
            <div className="container px-4" >
                <div className="flex items-center justify-between w-full" >
                    <div className="portfolio-container row gx-5 gy-5 m-auto" >
                        <div
                            className="section-header flex px-32 absolute top-0 justify-between w-full z-50 flex-col md:flex-row items-center">

                            <div className="section-title flex" id="contact_header" >
                                PORTFOLIO
                            </div>

                        </div>

                        <div className="col-6 col-sm-6 col-md-4 col-lg-2" >
                            <motion.div
                                animate={firstImage}
                               className="portfolio hover:box-shadow-light">
                                <div className="img ">
                                    <Image src={s4}/>
                                </div>
                                <div className="title">DotOracle</div>
                            </motion.div>
                        </div>

                        <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                            <motion.div
                                animate={secondImage}
                                 className="portfolio">
                                <div className="img " id="coin98">
                                    <Image src={coin98}/>
                                </div>
                                <div className="title">Coin98</div>
                            </motion.div>
                        </div>

                        <div className="col-6 col-sm-6 col-md-4 col-lg-2"  ref={rootRef}>
                            <motion.div
                                animate={thirdImage}
                                className="portfolio"
                            >
                                <div className="img " id="defiwarrior">
                                    <Image src={defi}/>
                                </div>
                                <div className="title">Defi Warrior</div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}