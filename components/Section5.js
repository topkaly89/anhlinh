import { motion } from 'framer-motion';
import Image from 'next/image'


import s4 from '../public/s4.svg'
import s5 from '../public/s5.svg'
import s6 from '../public/s6.svg'

export default function Section5() {
  
    return (
        <div className="section w-full bg">
            <div className="container px-4">
                <div className="flex items-center justify-between w-full">
                    
                    <div className="row gx-5 gy-5 m-auto">
                        <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                            <div className="portfolio">
                                <div className="img">
                                    <Image src={s4}/>
                                </div>
                                <div className="title">DotOracle</div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                            <div className="portfolio">
                                <div className="img">
                                    <Image src={s5}/>
                                </div>
                                <div className="title">Defi Warrior</div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                            <div className="portfolio">
                                <div className="img">
                                    <Image src={s6}/>
                                </div>
                                <div className="title">Coin98</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}