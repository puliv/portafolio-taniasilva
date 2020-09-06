import React, { Component } from 'react'
import { Link } from 'gatsby'
import lineMenu from '../../images/menu.png'


export class ProjectsHeader extends Component {
  constructor(props) {
    super(props)

    this.state = {
      openProjectsMenu: false
    }
  }

  handleClick = () => {
    const { openProjectsMenu } = this.state
    this.setState({
      openProjectsMenu: !openProjectsMenu
    })
  }


  render() {
    const { openProjectsMenu } = this.state
    const back = "<<"
    return (
      <React.Fragment>
        <header className="nav-projects">
          <div className="nav-projects-left">
            <Link to="/" >
              {back}
            </Link>
          </div>
          <div className="nav-projects-center">
            <div className="mobile-projects-nav">
              <img src={lineMenu} alt="menu" onClick={this.handleClick} />
              {openProjectsMenu && <div className="mobile-projects-div slide-in-right">
                <ul className="mobile-projects-ul">
                  <Link to="/sumateALoVerde">
                    <li>App Súmate a lo Verde</li>
                  </Link>
                  <Link to="/proyectoTitulo">
                    <li>Proyecto Título</li>
                  </Link>
                  <Link to="/copec3d">
                    <li>3D Copec</li>
                  </Link>
                  <Link to="/cafeteriaBHP">
                    <li>Cafeteria BHP</li>
                  </Link>
                  <Link to="/patrem">
                    <li>Proyecto Patrem</li>
                  </Link>
                </ul>
              </div>}
            </div>
            <ul>
              <Link to="/sumateALoVerde">
                <li>
                  App Súmate a lo Verde
                </li>
              </Link>
              <Link to="/proyectoTitulo">
                <li>
                  Proyecto Título
                </li>
              </Link>
              <Link to="/copec3d">
                <li>
                  3D Copec
                </li>
              </Link>
              <Link to="/cafeteriaBHP">
                <li>
                  Cafeteria BHP
                </li>
              </Link>
              <Link to="/patrem">
                <li>
                  Proyecto Patrem
                </li>
              </Link>
            </ul>
          </div>
        </header>
      </React.Fragment>
    )
  }
}

export default ProjectsHeader


