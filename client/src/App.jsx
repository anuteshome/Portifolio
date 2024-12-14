import React from 'react'

import './App.css'
import Hero from './component/Hero/Hero'
import About from './component/About/About'
import Project from './component/projects/project'
import Nav from './component/Nav/Nav'
import Contact from './component/contactUs/contact'

function App() {

  return (
    <>
  <Nav/>
   <Hero/>
   <About/>
   <Project/>
   <Contact/>

    </>
  )
}

export default App
