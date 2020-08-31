import React, { useState, createRef } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Inicio from "../components/inicio"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"

import lineMenu from '../images/menu.png'

const IndexPage = () => {
  const inicioRef = createRef();
  const aboutRef = createRef();
  const projectsRef = createRef();
  const contactRef = createRef();

  const [navMobile, setNavMobile] = useState(false)

  const openNavMobile = () => {
    setNavMobile(!navMobile)
  }

  const handleScroll = ref => {
    const elem = ref.current
    elem.scrollIntoView({ behavior: 'smooth' })
  }

  const handleScrollMobile = ref => {
    const elem = ref.current
    elem.scrollIntoView({ behavior: 'smooth' })
    setNavMobile(false)
  }

  return (
    <Layout>
      <header className="nav">
        <div className="nav-left">
          <h1 onClick={() => handleScroll(inicioRef)}>TS.</h1>
        </div>
        <div className="nav-right">
          <ul>
            <li onClick={() => handleScroll(inicioRef)}>INICIO</li>
            <li onClick={() => handleScroll(aboutRef)}>SOBRE MI</li>
            <li onClick={() => handleScroll(projectsRef)}>PROYECTOS</li>
            <li onClick={() => handleScroll(contactRef)}>CONTÁCTAME</li>
          </ul>
          <div onClick={openNavMobile}>
            <img src={lineMenu} alt="menu" />
          </div>
        </div>
      </header>
      {navMobile && <div className="nav-mobile slide-in-right">
        <ul>
          <li onClick={() => handleScrollMobile(inicioRef)}>INICIO</li>
          <li onClick={() => handleScrollMobile(aboutRef)}>SOBRE MI</li>
          <li onClick={() => handleScrollMobile(projectsRef)}>PROYECTOS</li>
          <li onClick={() => handleScrollMobile(contactRef)}>CONTÁCTAME</li>
        </ul>
      </div>}

      <SEO title="Tania Silva" />
      <div ref={inicioRef} style={{ paddingTop: "69px" }}>
        <Inicio />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectsRef} style={{ paddingTop: "69px" }}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </Layout >
  )
}

export default IndexPage
