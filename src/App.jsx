import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Experience from './Components/Experience'
import Education from './Components/Education'
import Contact from './Components/Contact'

const App = () => {
  return (
    <main className='mx-auto max-w-7xl overflow-x-hidden antialiased '>
      <div className='bg-image fixed inset-0 bg-cover bg-fixed bg-center'></div>
      <div className='relative z-10'>
      <Navbar/>
      <Hero/>
      <Projects/>
      <Skills/>
      <Experience/>
      <Education/>
      <Contact/>

      </div>
    </main>
  )
}

export default App