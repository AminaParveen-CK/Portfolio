import React from 'react'
import Introduction from './intro/Introduction'
import About from './About/About'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
const Home = () => {
  return (
    <>
        <Introduction/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default Home