import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header className="nav">
    <div className="nav-left">
      <h1>TS.</h1>
    </div>

    <div className="nav-right">
      <ul>
        <li>INICIO</li>
        <li>SOBRE MI</li>
        <li>PROYECTOS</li>
        <li>CONTÁCTAME</li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
