import {motion, useAnimation} from 'framer-motion';
import Image from 'next/image'


import s3 from '../public/s3.svg'
import {useEffect, useRef} from "react";
import useOnScreen from "../util/utils";
let animated = false;
export default function Section4() {
    const controls = useAnimation();
    const controlsImage = useAnimation();
    const rootRef = useRef();
    const onScreen = useOnScreen(rootRef);
    useEffect(async () => {
        if (onScreen && !animated) {

            controls.start( {
                x: 0,
                opacity: 1,
            });
            controlsImage.start({
                rotate: 360
            });
            animated = true;
        }
    }, [onScreen]);
    return (
        <div className="section w-full bg" >
            <div className="info2">
                <div className="container px-4">
                    <div className="info row gx-5 gy-5 items-center m-auto" >
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 text-start z-30 info-mt-auto">
                            <motion.img
                                ref={rootRef}
                                animate={controlsImage}
                                transition={{ease: "easeOut", duration: 3, delay: 0}}
                                src="/s3.svg" width="525" height="525" data-speed="-10"
                            />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 z-30 info-mb-auto pr-20">
                            <motion.h2 initial={{opacity: 0}}
                                       animate={controls}
                                       transition={{ease: "easeInOut", duration: 0.5, delay: 0.5}}
                            >What we do
                            </motion.h2>
                            <motion.p initial={{opacity: 0}}
                                      animate={controls}
                                      transition={{ease: "easeOut", duration: 0.5, delay: 1.2}}>
                                AstroV Ventures invests in potential gaming, NFT and DeFi projects.
                            </motion.p>
                            <motion.p initial={{opacity: 0}}
                                      animate={controls}
                                      transition={{ease: "easeOut", duration: 0.5, delay: 1.7}}> Beside financial
                                investments, we are dedicated in helping blockchain projects reach mass adoption by
                                providing extensive resources and industry networks.
                            </motion.p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}