import React from 'react'
import NavBar from './sections/NavBar'
import Hero from './sections/Hero'
import About from './sections/About'
import Project from './sections/Project'
import Experience from './sections/Experience'

const App = () => {
  return (
    <main className="max-w-custom mx-auto">
      <NavBar />
      <Hero />
      <About/>
      <Project/>
      <Experience/>
    </main>
  )
}

export default App