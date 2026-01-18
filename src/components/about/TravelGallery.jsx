function TravelGallery() {
  return (
    <section className="w-[70%] mx-auto py-16 pb-32">
      <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold mb-4">Beyond the Code</h2>
      <p className="font-sans text-[18px] font-normal text-black leading-[1.6] mb-12 w-[60%]">
        Outside of regular development work, I enjoy participating in hackathons, staying active through exploring new places all of which keep me curious and energized for collaborative problem-solving.
      </p>
      
      {/* Masonry Grid Collage */}
      <div className="grid grid-cols-3 gap-4 auto-rows-[200px]">
        {/* Image 1 - Tall */}
        <div className="row-span-2 rounded-3xl overflow-hidden bg-gray-100">
          <img 
            src="/about/img1.jpeg" 
            alt="Travel"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 2 - Normal */}
        <div className="rounded-3xl overflow-hidden bg-gray-100">
          <video 
            src="/about/img5.mp4" 
            alt="Travel"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        {/* Image 3 - Tall */}
        <div className="row-span-2 rounded-3xl overflow-hidden bg-gray-100">
          <img 
            src="/about/img3.jpeg" 
            alt="Travel"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 4 - Tall */}
        <div className="row-span-2 rounded-3xl overflow-hidden bg-gray-100">
          <img 
            src="/about/guitar.jpeg" 
            alt="Travel"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 5 - Normal */}
        <div className="rounded-3xl overflow-hidden bg-gray-100">
          <img 
            src="/about/img5.jpeg" 
            alt="Travel"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 6 - Tall */}
        <div className="row-span-2 rounded-3xl overflow-hidden bg-gray-100">
          <img 
            src="/tech.png" 
            alt="Travel"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 7 - Normal */}
        <div className="rounded-3xl overflow-hidden bg-gray-100">
          <img 
            src="/about/img4.jpeg" 
            alt="Travel"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 8 - Normal */}
        <div className="rounded-3xl overflow-hidden bg-gray-100">
          <img 
            src="/about/Screenshot 2025-09-28 155933.png" 
            alt="Travel"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default TravelGallery
