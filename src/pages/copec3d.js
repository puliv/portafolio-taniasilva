import React from "react"
import ProjectsTitle from "../components/projects/projectsTitle"
import copec from '../images/copec.png'
import copec1 from '../images/copec1.jpg'
import copec2 from '../images/copec2.jpg'
import G100 from '../images/G100.png'
import ProjectsHeader from "../components/projects/projectsHeader"


const Copec3d = () => (
  <div className="copec">
    <ProjectsHeader />
    <div className="copec-body">
      <ProjectsTitle title={"3D Copec"} image={copec} />
      <div className="uno">
        <div className="uno-span">
          <span>El proyecto para hacer un diseño de la cafetería de uno de los edificios de la empresa Copec, surge como petición para G°100 arquitectos, lugar donde realicé mi práctica profesional. La empresa se dedica a hacer diseños y rediseños de cocinas y cafeterías, además de tener un área de ejecución de los proyectos una vez son aprobados.
        </span>
        </div>
        <div className="uno-img">
          <img src={G100} alt="BHP" />
        </div>
      </div>
      <div className="line">
        <hr />
        <h3>DESARROLLO</h3>
      </div>
      <div className="dos">
        <div className="dos-span">
          <div style={{ marginBottom: "15px" }}>
            <span >
              En esta oportunidad el cliente solicita el diseño de una nueva a cafetería para uno de sus edificios. Los requerimientos del cliente son basarse en propuestas de otros diseños anteriormente realizados por la empresa.
          </span>
          </div>
          <div style={{ marginBottom: "15px" }}>
            <span >
              Se desarrolla un layout básico por parte de uno de los arquitectos del equipo, el cual se toma para realizar el levantamiento para el 3D y realizar el diseño, los cuales se me encargan a mí para posteriormente ser presentado al cliente. La idea es aprobada pero el cliente solicita tiempo para la ejecución física del proyecto por lo que queda en Pausa.
            </span>
          </div>
        </div>
        <div className="dos-img">
          <img src={copec1} alt="BHP" />
        </div>
      </div>
      <div className="tres">
        <div className="tres-img">
          <img src={copec2} alt="BHP" />
        </div>
        <div className="tres-span">
          <div style={{ marginBottom: "30px" }}>
            <div >
              <h3>Realización técnica</h3>
              <span >
                Se utilizó Vectorworks para el levantamiento 3d del espacio y Artlantis para generar las propuestas de materialidad y colores. También se utilizó Adobe Illustrator y Photoshop para la realización de gráficas del espacio.
            </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

)

export default Copec3d
