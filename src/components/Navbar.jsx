function Navbar({ currentPage, setCurrentPage }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md">
      <div className="max-w-[1200px] mx-auto py-3 md:py-5 px-4 md:px-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="h-6 md:h-8">
            <img 
              src="nav/image.png" 
              alt="Ishika" 
              className="h-full w-auto object-contain cursor-pointer"
              onClick={() => setCurrentPage && setCurrentPage('home')}
            />
          </div>
          <nav className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            <button 
              onClick={() => setCurrentPage && setCurrentPage('home')}
              className={`text-xs sm:text-sm md:text-base text-gray-700 hover:text-gray-900 transition-colors font-medium ${currentPage === 'home' ? 'text-gray-900 underline underline-offset-4' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => setCurrentPage && setCurrentPage('about')}
              className={`text-xs sm:text-sm md:text-base text-gray-700 hover:text-gray-900 transition-colors font-medium ${currentPage === 'about' ? 'text-gray-900 underline underline-offset-4' : ''}`}
            >
              About
            </button>
            <a 
              href="https://ishika-resume-1.tiiny.site/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs sm:text-sm md:text-base bg-black text-white px-3 py-1.5 md:px-4 md:py-2 rounded-md hover:bg-gray-800 transition-colors font-medium"
            >
              Resume
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
