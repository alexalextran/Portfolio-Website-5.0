import Head from 'next/head'
import AboutMe from '../components/AboutMe'
import LandingPage from '../components/LandingPage'
import { ParallaxProvider } from 'react-scroll-parallax';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Statistics from '../components/Statistics';
import Timeline from '../components/Timeline';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

export default function Home() {


  return (
    <section>
      <Head>
        <title>Alex Tran</title>
        <meta name="description" content="Alex Tran's personal portfolio" />
        <link rel="icon" href="/profilepic.png" />
      </Head>

      <main>
      <ParallaxProvider>
        <Nav/>
       <LandingPage/>
       <AboutMe/>
       <Skills/>
       <Projects />
       <Statistics/>
       <Timeline/>
       </ParallaxProvider>
       <Footer />
      </main>

    </section>
   
  )
}
