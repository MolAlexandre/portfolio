import React from 'react'
import NavBar from './sections/NavBar'
import Hero from './sections/Hero'
import About from './sections/About'
import About1 from './sections/About1'
import About2 from './sections/About2'
import Project from './sections/Project'

const App = () => {
  return (
    <main className="max-w-custom mx-auto">
      <NavBar/>
      <Hero/>
      <About/>
      <About1/>
      <Project/>
      <About2/>
    </main>
  )
}

export default App