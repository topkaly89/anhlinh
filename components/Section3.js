import { motion } from 'framer-motion';
import Image from 'next/image'


import s2 from '../public/s2.svg'

export default function Section3() {

    return (
        <div className="section w-full bg">
            <div className="container px-4">
                <div className="flex items-center justify-between w-full">
                    <div className="mmm">
                        <h2>Why AstroV?</h2>
                        <p>
                        AstroV is deeply committed to providing effective support and long term value to blockchain games and technology.
                        </p>
                        <p>
                        Our ethos strongly aligns with teams that have the desire to build industry changing platforms, and we pride ourselves in having a large range of resources to realise our shared visions.
                        </p>
                    </div>
                    <div className="kkk">
                        <Image src={s2} width={525} />
                    </div>
                </div>
            </div>
        </div>
    )
}