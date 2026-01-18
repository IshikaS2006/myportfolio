function SportsSection() {
  return (
    <section className="w-[70%] mx-auto py-16">
      <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold mb-4">Fall seven times, stand up eight</h2>
      <p className="font-sans text-[18px] font-normal text-gray-600 leading-[1.6] mb-12">
        Outside work, you will catch me hitting the road for 5-10km runs, splashing in the pool, or going all-in over competitive board and card games.
      </p>
      
      {/* Masonry Grid Collage */}
      <div className="grid grid-cols-3 gap-4 auto-rows-[200px]">
        {/* Skateboarding - Tall */}
        <div className="row-span-2 rounded-3xl overflow-hidden bg-gray-100 hover:shadow-xl transition-shadow">
          <img 
            src="/demo.webp" 
            alt="Skateboarding"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Pool - Normal */}
        <div className="rounded-3xl overflow-hidden bg-gray-100 hover:shadow-xl transition-shadow">
          <img 
            src="/demo.webp" 
            alt="Swimming Pool"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Billiards - Tall */}
        <div className="row-span-2 rounded-3xl overflow-hidden bg-gray-100 hover:shadow-xl transition-shadow">
          <img 
            src="/demo.webp" 
            alt="Billiards"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Strava Activity Card */}
        <div className="row-span-2 bg-white border border-gray-200 rounded-3xl p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
              <img src="/demo.webp" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="font-bold text-sm">Saban 🔥 • Follow</h3>
              <p className="text-xs text-gray-500">⏱️ August 29, 2023</p>
            </div>
          </div>

          <img 
            src="/demo.webp" 
            alt="Pool view"
            className="w-full aspect-video object-cover rounded-2xl mb-4"
          />

          <h4 className="font-bold text-lg mb-2">Evening Run</h4>
          <div className="flex gap-8 mb-4">
            <div>
              <p className="text-xs text-gray-500">Distance</p>
              <p className="font-bold">10.1 km</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Time</p>
              <p className="font-bold">56m</p>
            </div>
          </div>

          <img 
            src="/demo.webp" 
            alt="Route map"
            className="w-full aspect-square object-cover rounded-2xl"
          />
        </div>

        {/* Running Selfie - Tall */}
        <div className="row-span-2 rounded-3xl overflow-hidden bg-gray-100 hover:shadow-xl transition-shadow">
          <img 
            src="/demo.webp" 
            alt="Running"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Table Tennis - Wide */}
        <div className="col-span-2 rounded-3xl overflow-hidden bg-gray-100 hover:shadow-xl transition-shadow">
          <img 
            src="/demo.webp" 
            alt="Table Tennis"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Foosball */}
        <div className="rounded-3xl overflow-hidden bg-gray-100 hover:shadow-xl transition-shadow">
          <img 
            src="/demo.webp" 
            alt="Foosball"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default SportsSection
