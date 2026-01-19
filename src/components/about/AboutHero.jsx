function AboutHero() {
  return (
    <section className="w-full px-6 md:w-[85%] lg:w-[70%] mx-auto pt-24 md:pt-32 pb-12 md:pb-16">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-stretch">
        {/* Photo */}
        <div className="w-full md:w-[40%] flex-shrink-0">
          <div className="h-64 md:h-full rounded-3xl overflow-hidden bg-gray-100">
            <img 
              src="/about/mee.jpeg" 
              alt="Ishika"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bio */}
        <div className="flex-1 space-y-4 md:space-y-6">
          <div>
            <h1 className="font-sans text-[24px] md:text-[32px] lg:text-[40px] font-bold leading-[1.1] mb-3 md:mb-4">
              What I'm bout.
            </h1>
            <p className="font-sans text-[16px] md:text-[18px] font-normal text-gray-600 leading-[1.6]">
              A developer passionate about building clean, intuitive, and impactful web experiences.
            </p>
          </div>

          <div className="font-sans text-[15px] md:text-[18px] font-normal text-gray-700 leading-[1.6] space-y-3 md:space-y-4">
            <p>
              My tech journey began with curiosity about how digital products work and gradually grew into frontend development and product-focused engineering.
            </p>
            <p>
              Over time, I've worked with React, Tailwind CSS, modern UI patterns, and interactive web experiences, focusing on building interfaces that are both functional and user-friendly.
            </p>
            <p>
              Beyond development, I enjoy exploring new challenges whether it's learning new technologies, collaborating on projects, or growing through hands-on problem-solving.
            </p>
            <p>
              Scroll down to check out some of my work I'd love to connect and chat about shared interests!
            </p>
            <p>
              Feel free to reach out. I'm excited about opportunities to collaborate and build something meaningful together. 
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
