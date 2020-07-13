import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "../scss/layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div
        style={{
          margin: `0 0`,
          width: `100%`,
          padding: `0`,
        }}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
