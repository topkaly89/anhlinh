import Head from 'next/head'
import styles from '../styles/Home.module.css'
//import ReactFullpage from '@fullpage/react-fullpage'
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
                <script src="/js/jquery.min.js"></script>
                <script src="/js/main.js"></script>
			</Head>

			<Section1 fullpageApi={fullpageApi} />
                                <Section3 fullpageApi={fullpageApi} />
                                <Section4 fullpageApi={fullpageApi} />
                                <Section5 fullpageApi={fullpageApi} />
                                <Section2 fullpageApi={fullpageApi} />
		</div>
	)
}
