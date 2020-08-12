import React, { Component } from 'react'
import { Link } from 'gatsby'

export class ProjectsHeader extends Component {
  handleClick = () => {
    console.log("hola")
  }

  render() {
    const back = "<<"
    const next = ">>"
    return (
      <header className="nav-projects">
        <div className="nav-projects-left">
          {back}
        </div>
        <div className="nav-projects-center">
          <ul>
            <Link to="/sumateALoVerde">
              <li onClick={this.handleClick}>
                App Súmate a lo Verde
                </li>
            </Link>
            <Link to="/proyectoTitulo">
              <li onClick={this.handleClick}>
                Proyecto Título
                </li>
            </Link>
            <Link to="/copec3d">
              <li onClick={this.handleClick}>
                3D Copec
                </li>
            </Link>
            <Link to="/cafeteriaBHP">
              <li onClick={this.handleClick}>
                Cafeteria BHP
                </li>
            </Link>
            <Link to="/patrem">
              <li onClick={this.handleClick}>
                Proyecto Patrem
                </li>
            </Link>
          </ul>
        </div>
        <div className="nav-projects-right">
          {next}
        </div>
      </header>
    )
  }
}

export default ProjectsHeader


