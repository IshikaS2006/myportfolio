function ContentCreation() {
  return (
    <section className="w-[70%] mx-auto py-16">
      <div className="flex flex-col gap-8">
        {/* Text Content */}
        <div className="md:w-[60%]">
          <h2 className="font-sans text-[28px] md:text-[36px] lg:text-[40px] font-bold mb-4">I create, curate & edit</h2>
          <p className="font-sans text-[18px] font-normal text-gray-600 leading-[1.6]">
            When I'm not coding, I'm busy creating and editing fun content! Join me in exploring new adventures and sharing stories through videos. Follow me on Instagram for real-time updates and behind-the-scenes fun!
          </p>
        </div>

        {/* Images */}
        <div className="flex gap-6">
          <div className="w-[40%] aspect-[21/10] rounded-3xl overflow-hidden bg-black hover:shadow-xl transition-shadow flex items-center justify-center">
            <video 
              src="/about/lnmiit.mp4" 
              alt="Content Creation Setup"
              className="w-full h-full object-contain"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <div className="w-[60%] aspect-[21/10] rounded-3xl overflow-hidden bg-black hover:shadow-xl transition-shadow flex items-center justify-center">
            <img 
              src="/about/setup.jpeg" 
              alt="Editing Workspace"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContentCreation
