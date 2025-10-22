import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import { gsap } from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Showcase from './components/ShowCase'
import Performance from './components/Performance'
import Features from './components/Features'
import Highlights from './components/Highlights'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
    return (
        <main>
            <Navbar/>
            <Hero/>
            <ProductViewer/>
            <Showcase/>
            <Performance/>
            <Features/>
            <Highlights/>
            <Footer/>
        </main>
    )
}

export default App
