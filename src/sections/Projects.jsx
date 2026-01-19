import Card from '../components/Card'
import Tag from '../components/Tag'
import Button from '../components/Button'

function Projects() {
  const projects = [
    {
      name: 'Pet Analytics Dashboard',
      description: 'A monitoring and analytics dashboard designed for pet owners to track pet-related data, activities, and insights in one place.',
      image: '/projs/img1.png',
      liveLink: 'https://petanalysit.vercel.app/',
      repoLink: 'https://github.com/IshikaS2006/petanalysit'
    },
    {
      name: 'InterviewBoard',
      description: 'A collaborative whiteboard built specifically for technical interviews to enable clear, structured explanations. It supports real-time collaboration, guided explanations, and post-interview review with a minimal, intentional workflow.',
      image: '/projs/img2.png',
      liveLink: 'https://lnkd.in/gdMS3Ss2',
      repoLink: 'https://lnkd.in/gAWsPjk3'
    }
  ]

  return (
    <section id="projects" className="py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="w-full md:max-w-[90%] lg:max-w-[79%] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="mb-6 flex justify-center">
            <img 
              src="/projs.png" 
              alt="Projects" 
              className="w-24 h-24 md:w-32 md:h-32 object-contain"
            />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-4 px-4">Projects & Works</h2>
        </div>

        {/* Projects List */}
        <div className="space-y-12 md:space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              {/* Project Image */}
              <div className="md:w-1/2">
                <div className="rounded-lg overflow-hidden border border-gray-300 bg-gray-50">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = `<div class="text-gray-400 text-lg p-20 text-center">${project.name} Preview</div>`
                    }}
                  />
                </div>
              </div>

              {/* Project Content */}
              <div className="md:w-1/2 flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-semibold text-black mb-3 md:mb-4">
                  {project.name}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 md:mb-6">
                  {project.description}
                </p>
                
                {/* Buttons */}
                <div className="flex flex-wrap gap-3">
                  <button 
                    onClick={() => window.open(project.liveLink, '_blank')}
                    className="bg-black text-white rounded-lg px-6 py-2.5 font-medium text-sm inline-flex items-center gap-2 hover:bg-gray-800 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                    Link
                  </button>
                  <button 
                    onClick={() => window.open(project.repoLink, '_blank')}
                    className="bg-white text-black border border-gray-400 rounded-lg px-6 py-2.5 font-medium text-sm inline-flex items-center gap-2 hover:bg-gray-50 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Repo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
