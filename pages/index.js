import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ReactFullpage from '@fullpage/react-fullpage'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4'
import Section5 from '../components/Section5'
export default function Home() {
	return (
		<div>
			<Head>
				<title>AstroV - Take Off and Go Beyond</title>
				<meta name="description" content="AstroV" />
				<link rel="icon" href="/favicon.ico" />

                <link rel="stylesheet" type="text/css" href="/fullPage/fullpage.css" />

                <script src="/js/jquery.min.js"></script>
                <script src="/fullPage/fullpage.js"></script>

                <script src="/js/main.js"></script>
                

			</Head>

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