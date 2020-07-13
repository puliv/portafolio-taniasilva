import React from "react"
// import PropTypes from "prop-types"

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

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
