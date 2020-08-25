import React, { useState } from 'react'
import { ScrollTo } from "react-scroll-to";
import lineMenu from '../images/menu.png'
import detail from "../images/detail_2.png"


function Header() {
  const [navMobile, setNavMobile] = useState(false)

  const openNavMobile = () => {
    setNavMobile(!navMobile)
  }

  return (
    <ScrollTo>
      {({ scroll }) => (
        <React.Fragment>
          <header className="nav">
            <div className="nav-left">
              <h1 onClick={() => scroll({ x: 0, y: 0, smooth: true })}>TS.</h1>
            </div>
            <div className="nav-right">
              <ul>
                <li onClick={() => scroll({ x: 0, y: 0, smooth: true })}>INICIO</li>
                <li onClick={() => scroll({ x: 0, y: 690, smooth: true })}>SOBRE MI</li>
                <li onClick={() => scroll({ x: 0, y: 2290, smooth: true })}>PROYECTOS</li>
                <li onClick={() => scroll({ x: 0, y: 3000, smooth: true })}>CONTÁCTAME</li>
              </ul>
              <div onClick={openNavMobile}>
                <img src={lineMenu} alt="menu" />
              </div>
            </div>
          </header>
          {navMobile && <div className="nav-mobile">

            <ul>
              <li onClick={() => scroll({ x: 0, y: 0, smooth: true })}>INICIO</li>
              <li>SOBRE MI</li>
              <li>PROYECTOS</li>
              <li>CONTÁCTAME</li>
            </ul>
          </div>}
        </React.Fragment>
      )}
    </ScrollTo>
  )
}

export default Header;