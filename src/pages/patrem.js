import React from "react"
import ProjectsTitle from "../components/projects/projectsTitle"
import patrem from '../images/patrem_1.png'
import PATREM from '../images/PATREM-.png'
import patrem1 from '../images/patrem1.png'
import patrem2 from '../images/patrem2.png'
import patrem3 from '../images/patrem3.png'
import patrem4 from '../images/patrem4.png'
import ProjectsHeader from "../components/projects/projectsHeader"


const Patrem = () => (
  <div className="patrem">
    <ProjectsHeader />

    <div className="patrem-body">
      <ProjectsTitle title={"Proyecto Patrem"} image={patrem} />
      <div className="uno">
        <div className="uno-span">
          <div style={{ marginBottom: "15px" }}>
            <span >
              El cliente solicita el rediseño de un espacio para convertirlo en una cafetería y lugar de almuerzo, para que así sus trabajadores no tengan que salir a comprar fuera del edificio de trabajo. Este proyecto no especificó ningún requerimiento de diseño.
          </span>
          </div>
          <div style={{ marginBottom: "15px" }}>
            <span >
              En este caso no fue necesaria la creación de un layout por parte de los arquitectos, por lo que se empieza con el 3D y el diseño. Con fotografías básicas del lugar se hace una simulación del espacio. Primero se diseña la cafetería con ciertos toques característicos de la empresa como son las maderas en la pared.
          </span>
          </div>
          <div>
            <span>
              Luego se diseña el espacio donde irán las mesas, agregando coherencia entre cafetería y el comedor. Finalmente se diseña el mueble y lugar donde irán los microondas.
          </span>
          </div>
        </div>
        <div className="uno-img">
          <img src={PATREM} alt="patrem" />
        </div>
      </div>
      <div className="line">
        <hr />
      </div>
      <div className="dos">
        <div className="dos-img">
          <div>
            <img src={patrem1} alt="patrem" />
          </div>
          <div>
            <img src={patrem2} alt="patrem" />
          </div>
        </div>
        <div className="dos-img">
          <div>
            <img src={patrem3} alt="patrem" />
          </div>
          <div>
            <img src={patrem4} alt="patrem" />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Patrem
