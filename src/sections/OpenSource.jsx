import Card from '../components/Card'
import Button from '../components/Button'
import { useState, useEffect } from 'react'

function OpenSource() {
  const [forkCounts, setForkCounts] = useState({})

  const contributions = [
    {
      iconType: 'lightning',
      name: 'Typing Competition',
      repo: 'saurabh-dev-vns/typing-comp',
      description: 'A real-time typing competition platform for college techfests with live scoring, anti-cheating, and role-based access.',
      repoLink: 'https://github.com/saurabh-dev-vns/typing-comp',
      prLink: 'https://github.com/saurabh-dev-vns/typing-comp/pulls?q=is%3Apr+author%3AIshikaS2006+'
    },
    {
      iconType: 'package',
      name: 'Universal App Opener',
      repo: 'mdsaban/universal-app-opener',
      description: 'A zero-dependency JavaScript library that converts standard HTTP URLs (YouTube, LinkedIn) into Native Mobile Deep Links (Custom Schemes & Android Intents).',
      repoLink: 'https://github.com/mdsaban/universal-app-opener',
      prLink: 'https://github.com/mdsaban/universal-app-opener/pulls?q=is%3Apr+author%3AIshikaS2006+'
    }
  ]

  useEffect(() => {
    // Fetch fork counts for all repositories
    contributions.forEach(contrib => {
      fetch(`https://api.github.com/repos/${contrib.repo}`)
        .then(res => res.json())
        .then(data => {
          setForkCounts(prev => ({
            ...prev,
            [contrib.repo]: data.forks_count
          }))
        })
        .catch(err => console.error('Error fetching fork count:', err))
    })
  }, [])

  return (
    <section id="opensource" className="py-24 px-8 bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-6 flex justify-center">
            <img 
              src="/contri/contri.png" 
              alt="Contributions" 
              className="w-32 h-32 object-contain"
            />
          </div>
          <h2 className="text-5xl font-semibold text-black mb-4">Open source contributions</h2>
        </div>

        {/* Contributions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[79%] mx-auto">
          {contributions.map((contrib, index) => (
            <div key={index} className="bg-white border border-gray-300 rounded-md p-8 flex flex-col">
              {/* Repo Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center">
                    {contrib.iconType === 'lightning' ? (
                      <svg className="w-8 h-8 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                      </svg>
                    ) : (
                      <svg className="w-8 h-8 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19zm0 1a8.5 8.5 0 1 1 0 17 8.5 8.5 0 0 1 0-17zM8 12.643l3.5 3.5 5-7" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-black">{contrib.name}</h3>
                </div>
                <div 
                  onClick={() => window.open(contrib.repoLink, '_blank')}
                  className="flex items-center gap-1.5 text-sm text-gray-700 bg-gray-50 px-3 py-1.5 rounded-md border border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"/>
                  </svg>
                  <span className="font-medium">Fork</span>
                  <span className="ml-1 font-semibold">{forkCounts[contrib.repo] ?? '...'}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                {contrib.description}
              </p>

              {/* Contributions Button */}
              <button 
                onClick={() => window.open(contrib.prLink, '_blank')}
                className="bg-black text-white rounded-lg px-6 py-2.5 font-medium text-sm inline-flex items-center gap-2 hover:bg-gray-800 transition-colors w-fit mt-auto"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"/>
                </svg>
                Contributions
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OpenSource
