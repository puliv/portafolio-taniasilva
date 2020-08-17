import React from 'react'
import { ScrollTo } from "react-scroll-to";
import lineMenu from '../images/menu.png'

const header = () => {
  return (
    <ScrollTo>
      {({ scroll }) => (
        <header className="nav">
          <div className="nav-left">
            <h1 onClick={() => scroll({ x: 0, y: 0, smooth: true })}>TS.</h1>
          </div>
          <div className="nav-right">
            <ul>
              <li onClick={() => scroll({ x: 0, y: 0, smooth: true })}>INICIO</li>
              <li onClick={() => scroll({ x: 0, y: 630, smooth: true })}>SOBRE MI</li>
              <li onClick={() => scroll({ x: 0, y: 2180, smooth: true })}>PROYECTOS</li>
              <li onClick={() => scroll({ x: 0, y: 3000, smooth: true })}>CONTÁCTAME</li>
            </ul>
            <img src={lineMenu} alt="menu" />
          </div>
        </header>
      )}
    </ScrollTo>
  )
}


export default header
