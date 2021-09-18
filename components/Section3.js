import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import useOnScreen from "../util/utils";

let animated = false;
export default function Section3() {
    const controls = useAnimation();
    const controlsImage = useAnimation();
    const rootRef = useRef();
    const onScreen = useOnScreen(rootRef);
    useEffect(async() => {
        if (onScreen && !animated) {
            controls.start({
                x: 0,
                opacity: 1,
            });
            controlsImage.start({
                initial: {
                    translateX: 0,
                    translateY: -15
                },
                translateX: -30,
                translateY: 15,
                transition: {ease: "easeInOut", duration: 1, delay: 0.2, repeat: 6, repeatType: "reverse"},
                transitionEnd:{
                    translateX: 0,
                    translateY: 0
                }
            })
            animated = true;
        }
    }, [onScreen]);

    return (
        <div className="section w-full bg_rotate">
            <div className="info1">
                <div className="container px-16">
                    <div className="info row gx-5 gy-5 items-center m-auto">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 z-30 info-mt-auto" >

                            <motion.h2 initial={{opacity: 0}}
                                       animate={controls}

                                       transition={{ease: "easeOut", duration: 0.5, delay: 0.1}}>Why AstroV?
                            </motion.h2>
                            <motion.p initial={{opacity: 0}}
                                      animate={controls}
                                      ref={rootRef}
                                      transition={{ease: "easeOut", duration: 0.5, delay: 0.6}}>
                                AstroV is deeply committed to providing effective support and long term value to
                                blockchain games and technology.
                            </motion.p>
                            <motion.p initial={{opacity: 0}}
                                      animate={controls}
                                      transition={{ease: "easeOut", duration: 0.5, delay: 1.1}}>
                                Our ethos strongly aligns with teams that have the desire to build industry changing
                                platforms, and we pride ourselves in having a large range of resources to realise our
                                shared visions.
                            </motion.p>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 text-end z-30 info-mb-auto">
                            <motion.img
                                src="/s2.svg" width="525" height="525" data-speed="5"
                                ref={rootRef}
                                animate={controlsImage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}