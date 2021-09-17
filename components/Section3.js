import { motion } from 'framer-motion';
import Image from 'next/image'


import s2 from '../public/s2.svg'

export default function Section3() {

    return (
        <div className="section w-full bg_rotate">
            <div className="info1">
                <div className="container px-4">
                    <div className="info row gx-5 gy-5 items-center m-auto">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 z-30 info-mt-auto">
                            <h2>Why AstroV?</h2>
                            <p>
                            AstroV is deeply committed to providing effective support and long term value to blockchain games and technology.
                            </p>
                            <p>
                            Our ethos strongly aligns with teams that have the desire to build industry changing platforms, and we pride ourselves in having a large range of resources to realise our shared visions.
                            </p>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 text-end z-30 info-mb-auto">
                            <img
                                src="/s2.svg" width="525" height="525"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}