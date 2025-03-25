import React from 'react'
import HomePage from './components/HomePage'
import AboutMe from './components/AboutMe'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import OpenSourceSection from './components/OpenSourceSection'
import ContactSection from './components/ContactSection'

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <HomePage />
      <AboutMe />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <OpenSourceSection />
      <ContactSection />
    </div>
  )
}

export default App