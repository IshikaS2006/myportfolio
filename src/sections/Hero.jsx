import Button from '../components/Button'
import { useState } from 'react'

function Hero() {
  const [showCopy, setShowCopy] = useState(false)
  
  const handleCopy = () => {
    navigator.clipboard.writeText('ishikasinghmavai2006@gmail.com')
    setShowCopy(true)
    setTimeout(() => setShowCopy(false), 2000)
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-8 pt-20 bg-white">
      <div className="max-w-[1200px] w-full">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Illustration */}
          <div className="w-32 h-32 mb-4">
            <img 
              src="/hero/hero-section-img-removebg-preview.png" 
              alt="Hero illustration" 
              className="w-full h-full object-contain"
            />
          </div>

          {/* Main Content */}
          <div className="w-full">
            <h1 
              className="font-sans text-6xl md:text-7xl font-bold text-black mb-4 tracking-tight"
              style={{ fontFeatureSettings: '"cv11"' }}
            >
              Hi, I&apos;m Ishika Singh <span className="inline-block animate-wave">👋</span>
            </h1>
            <h2 
              className="font-sans text-5xl md:text-6xl font-bold text-black mb-6 tracking-tight"
              style={{ fontFeatureSettings: '"cv11"' }}
            >
              Web Developer
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              I&apos;m a web developer based in Delhi, India, focused on building responsive, user-friendly web applications using modern technologies.
            </p>

            {/* Contact Button */}
            <button
              onClick={handleCopy}
              className="group relative inline-flex items-center gap-2 bg-black text-white rounded-lg px-8 py-2.5 font-medium transition-all duration-300 overflow-hidden hover:shadow-lg"
            >
              {/* Original text - slides up on hover */}
              <span className="relative flex items-center gap-2 transition-transform duration-300 ease-out group-hover:-translate-y-full">
                <span className="text-lg">✉</span>
                <span className="text-base">ishikasinghmavai2006@gmail.com</span>
              </span>
              
              {/* Copy text - slides up from below */}
              <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
                <span className="font-medium tracking-wide">
                  {showCopy ? '✓ Copied!' : 'Click to Copy'}
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
