import { motion } from 'framer-motion';
import Image from 'next/image'


import s3 from '../public/s3.svg'

export default function Section4() {

    return (
        <div className="section w-full bg">
            <div className="container px-4">
                    <div className="info info2 row gx-5 gy-5 items-center m-auto">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 text-start z-30">
                        <img
                            src="/s3.svg" width="525" height="525"
                        />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 z-30">
                            <h2>What we do</h2>
                            <p>
                            AstroV Ventures invests in potential gaming, NFT and DeFi projects. Beside financial investments, we are dedicated in helping blockchain projects reach mass adoption by providing extensive resources and industry networks.
                            </p>
                        </div>
                    </div>
            </div>
        </div>
    )
}