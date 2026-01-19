function Footer({ footerRef }) {
  return (
    <footer 
      ref={footerRef}
      className="fixed bottom-0 left-0 w-full z-0 bg-black text-white py-8 md:py-16 flex items-center justify-center"
    >
      <div className="text-center px-4 md:px-8">
        {/* Sparkle Icon */}
        <div className="mb-4 md:mb-6">
          <span className="text-4xl md:text-6xl">✨</span>
        </div>

        {/* Email */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 break-all">
          ishikasinghmavai2006@gmail.com
        </h2>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 md:gap-8 text-sm md:text-lg">
          <a 
            href="https://www.linkedin.com/in/ishika-singh-543881332/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-gray-500">|</span>
          <a 
            href="https://www.instagram.com/ishh_.you/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
