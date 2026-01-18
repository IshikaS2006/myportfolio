function Footer({ footerRef }) {
  return (
    <footer 
      ref={footerRef}
      className="fixed bottom-0 left-0 w-full z-0 bg-black text-white py-16 flex items-center justify-center"
    >
      <div className="text-center px-8">
        {/* Sparkle Icon */}
        <div className="mb-6">
          <span className="text-6xl">✨</span>
        </div>

        {/* Email */}
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          ishikasinghmavai2006@gmail.com
        </h2>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-8 text-lg">
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
