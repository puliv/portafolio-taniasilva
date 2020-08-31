import React, { Component } from 'react'

import detail from "../images/detail_2.png"
import project1 from "../images/project1.png"
import project2 from "../images/Brika.png"
import project3 from "../images/BHP2.jpg"
import project4 from "../images/copec1.jpg"
import project5 from "../images/PATREM-.png"


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
                      <img src={project1} alt="img" />
                    </div>
                    <h5>App Súmate a lo verde</h5>
                  </Link>
                </li>
                <li>
                  <Link to="/proyectoTitulo">
                    <div>
                      <img src={project2} alt="img" />
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
                      <img src={project3} alt="img" />
                    </div>
                    <h5>Cafeteria BHP</h5>
                  </Link>
                </li>
                <li>
                  <Link to="/copec3d">
                    <div>
                      <img src={project4} alt="img" />
                    </div>
                    <h5>3D Copec</h5>
                  </Link>
                </li>
                <li>
                  <Link to="/patrem">
                    <div>
                      <img src={project5} alt="img" />
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
