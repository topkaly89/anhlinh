import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ReactFullpage from '@fullpage/react-fullpage'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4'
import Section5 from '../components/Section5'
import Section6 from '../components/Section6'

export default function Home() {
    return (
        <div>
            <Head>
                <title>AstroV Ventures</title>
                <meta name="description" content="AstroV Ventures"/>
                <link rel="icon" href="logo-square.svg" type="image/svg"/>
                <link rel="stylesheet" type="text/css" href="/fullPage/fullpage.css"/>

                <script src="/js/jquery.min.js"></script>
                <script src="/fullPage/fullpage.js"></script>

                <script src="/js/main.js"></script>


            </Head>
            <Section6/>
            <div id="fullpage">
                <Section1/>
                <Section3/>
                <Section4/>
                <Section5/>
                <Section2/>
            </div>
        </div>
    )
}