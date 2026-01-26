import { useState, useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import OpenSource from './sections/OpenSource'
import TechStack from './components/about/TechStack'
import About from './pages/About'

function App() {
  const [footerHeight, setFooterHeight] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const location = useLocation()
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  const footerRef = useRef(null)
  const mainRef = useRef(null)

  useEffect(() => {
    const updateFooterHeight = () => {
      if (footerRef.current) {
        setFooterHeight(footerRef.current.offsetHeight)
      }
    }

    updateFooterHeight()
    window.addEventListener('resize', updateFooterHeight)
    
    return () => window.removeEventListener('resize', updateFooterHeight)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (mainRef.current) {
        const scrollTop = window.scrollY
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        const scrollPercent = scrollTop / docHeight
        
        // Only start effect after 60% scroll
        if (scrollPercent > 0.8) {
          const adjustedProgress = (scrollPercent - 0.6) / 0.4 // Maps 0.6-1.0 to 0-1
          setScrollProgress(Math.min(adjustedProgress, 1))
        } else {
          setScrollProgress(0)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scale = 1 - scrollProgress * 0.05 // Scale down by max 5%

  return (
    <div className="relative bg-black overflow-hidden">
      {/* Main Content Wrapper - scrolls over footer */}
      <main 
        ref={mainRef}
        style={{ 
          marginBottom: `${footerHeight}px`,
          transform: `scale(${scale})`,
          transformOrigin: 'top center'
        }}
        className="relative z-10 bg-white rounded-b-[32px] shadow-2xl pb-16 transition-transform duration-200 ease-out"
      >
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <OpenSource />
              <Projects />
              <TechStack />
            </>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      {/* Fixed Footer - revealed as content scrolls */}
      <Footer footerRef={footerRef} />
    </div>
  )
}

export default App
