import React from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';

const Header = () => (
  <header className="nav">
    <div className="nav-left">
      <h1>TS.</h1>
    </div>

    <div className="nav-right">
      <ul>
        <li onClick={() => scrollTo('#inicio')}>INICIO</li>
        <li onClick={() => scrollTo('#about')}>SOBRE MI</li>
        <li onClick={() => scrollTo('#proyects')}>PROYECTOS</li>
        <li onClick={() => scrollTo('#contact')}>CONTÁCTAME</li>
      </ul>
    </div>
  </header>
)

export default Header
