import React, { Component } from 'react'

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
            <li onClick={this.handleClick}>App Súmate a lo Verde</li>
            <li onClick={this.handleClick}>Proyecto Título</li>
            <li onClick={this.handleClick}>3D Copec</li>
            <li onClick={this.handleClick}>Cafeteria BHP</li>
            <li onClick={this.handleClick}>Proyecto Patrem</li>
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


