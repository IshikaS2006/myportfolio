function ContentCreation() {
  return (
    <section className="w-full px-6 md:w-[85%] lg:w-[70%] mx-auto py-12 md:py-16">
      <div className="flex flex-col gap-6 md:gap-8">
        {/* Text Content */}
        <div className="w-full md:w-[80%] lg:w-[60%]">
          <h2 className="font-sans text-[24px] md:text-[32px] lg:text-[40px] font-bold mb-3 md:mb-4">I create, curate & edit</h2>
          <p className="font-sans text-[16px] md:text-[18px] font-normal text-gray-600 leading-[1.6]">
            When I'm not coding, I'm busy creating and editing fun content! Join me in exploring new adventures and sharing stories through videos. Follow me on Instagram for real-time updates and behind-the-scenes fun!
          </p>
        </div>

        {/* Images */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <div className="w-full md:w-[40%] aspect-video md:aspect-[21/10] rounded-2xl md:rounded-3xl overflow-hidden bg-black flex items-center justify-center">
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
          <div className="w-full md:w-[60%] aspect-video md:aspect-[21/10] rounded-2xl md:rounded-3xl overflow-hidden bg-black flex items-center justify-center">
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
