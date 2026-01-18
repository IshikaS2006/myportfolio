import AboutHero from '../components/about/AboutHero'
import SocialBento from '../components/about/SocialBento'
import ContentCreation from '../components/about/ContentCreation'
import TravelGallery from '../components/about/TravelGallery'

function About() {
  return (
    <div className="bg-white min-h-screen">
      <AboutHero />
      <SocialBento />
      <ContentCreation />
      <TravelGallery />
    </div>
  )
}

export default About
