import '../styles/styles.scss';
import '@pantheon-systems/nextjs-kit/style.css';
import Script from "next/script"

function MyApp({ Component, pageProps }) {
	return <>
	<Component {...pageProps} />
	</>
	
}

export default MyApp;
