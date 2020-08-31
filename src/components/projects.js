import React, { Component } from 'react'

import detail from "../images/detail_2.png"
import { Link } from 'gatsby';


export class Projects extends Component {
  constructor(props) {
    super(props)

    this.state = {
      projects: false
    }
  }

  handleClick = () => {
    this.setState({
      projects: true
    })
  }

  render() {
    return (
      <React.Fragment>
        <section className="projects">
          <div className="project-title">
            <h3>Proyectos</h3>
            <img
              src={detail}
              alt="detail"
              className="project-detail"
            />
          </div>
          <div className="project-body">
            <div className="one">
              <ul>
                <li>
                  <Link to="/sumateALoVerde">
                    <div>
                      <img src={"https://github.com/TaniaSilvaTala/portafolio/blob/source/src/images/project1.png?raw=true"} alt="img" />
                    </div>
                    <h5>App Súmate a lo verde</h5>
                  </Link>
                </li>
                <li>
                  <Link to="/proyectoTitulo">
                    <div>
                      <img src={"https://github.com/TaniaSilvaTala/portafolio/blob/source/src/images/Brika.png?raw=true"} alt="img" />
                    </div>
                    <h5>Proyecto Titulo</h5>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="two">
              <ul>
                <li>
                  <Link to="/cafeteriaBHP">
                    <div>
                      <img src={"https://github.com/TaniaSilvaTala/portafolio/blob/source/src/images/BHP2.jpg?raw=true"} alt="img" />
                    </div>
                    <h5>Cafeteria BHP</h5>
                  </Link>
                </li>
                <li>
                  <Link to="/copec3d">
                    <div>
                      <img src={"https://github.com/TaniaSilvaTala/portafolio/blob/source/src/images/copec1.jpg?raw=true"} alt="img" />
                    </div>
                    <h5>3D Copec</h5>
                  </Link>
                </li>
                <li>
                  <Link to="/patrem">
                    <div>
                      <img src={"https://github.com/TaniaSilvaTala/portafolio/blob/source/src/images/PATREM-.png?raw=true"} alt="img" />
                    </div>
                    <h5>Proyecto Patrem</h5>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </React.Fragment >
    )
  }
}

export default Projects
