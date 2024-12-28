import React from 'react'
import NavBar from './sections/NavBar'
import Hero from './sections/Hero'
import About from './sections/About'
import Project from './sections/Project'
import Tech from './sections/Tech'

const App = () => {
  return (
    <main className="max-w-custom mx-auto">
      <NavBar />
      <Hero />
      <About/>
      <Project/>
      <Tech/>
    </main>
  )
}

export default App