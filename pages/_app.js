import '../styles/globals.css'
import { ParallaxProvider } from 'react-scroll-parallax';
import { Analytics } from "@vercel/analytics/react"
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
