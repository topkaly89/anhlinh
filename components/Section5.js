import {motion} from 'framer-motion';
import Image from 'next/image'


import s4 from '../public/s4.svg'
import s5 from '../public/s5.svg'
import s6 from '../public/s6.svg'
import coin98 from '../public/coin98svg.svg'
import defi from '../public/defiwarrior.svg'

export default function Section5() {

    return (
        <div className="section w-full bg_rotate">
            <div className="container px-4">
                <div className="flex items-center justify-between w-full">
                    <div className="portfolio-container row gx-5 gy-5 m-auto">
                        <div className="col-12">
                            <div className="h-title">Portfolio</div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                            <div className="portfolio hover:box-shadow-light">
                                <div className="img ">
                                    <Image src={s4}/>
                                </div>
                                <div className="title">DotOracle</div>
                            </div>
                        </div>

                        <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                            <div className="portfolio hover:box-shadow-light">
                                <div className="img " id="coin98">
                                    <Image src={coin98}/>
                                </div>
                                <div className="title">Coin98</div>
                            </div>
                        </div>

                        <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                            <div className="portfolio hover:box-shadow-light">
                                <div className="img " id="defiwarrior">
                                    <Image src={defi}/>
                                </div>
                                <div className="title">Defi Warrior</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}