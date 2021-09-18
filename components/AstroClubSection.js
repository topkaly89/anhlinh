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
export default function AstroClubSection() {
    const firstImage = useAnimation();

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
            animated = true;
        }
    }, [onScreen]);
    return (
        <div className="section w-full bg_rotate">
            <div className="container px-4" >
                <div className="flex items-center justify-between w-full" >
                    <div className="portfolio-container row gx-5 gy-5 m-auto" >
                        <div
                            className="section-header flex px-32 absolute top-1/4 justify-center w-full z-50 flex-col md:flex-row items-center">

                            <div className="section-title flex flex-col">
                                <div id="big_club_title">ASTRONAUT CLUB</div>
                                <p id="club_subtitle">Coming Soon</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}