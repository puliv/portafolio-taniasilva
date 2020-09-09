import React from "react"
import ProjectsTitle from "../components/projects/projectsTitle"
import BHP from '../images/BHP.png'
import BHP1 from '../images/BHP1.jpg'
import BHP2 from '../images/BHP2.jpg'
import BHP3 from '../images/BHP3.jpg'
import G100 from '../images/G100.png'
import ProjectsHeader from "../components/projects/projectsHeader"


const CafeteriaBHP = () => (
  <div className="cafeteria">
    <ProjectsHeader />

    <div className="cafeteria-body">
      <ProjectsTitle title={"Cafetería BHP"} image={BHP} />
      <div className="uno">
        <div className="uno-span">
          <span>Se me asigna el proyecto Diseño de cafetería y comedor para la empresa Minera BHP. Fue un proyecto de gran responsabilidad, ya que trabaje solo yo trabaje en el desarrollo de este proyecto.</span>
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
        <div className="dos-img">
          <img src={BHP1} alt="BHP" />
        </div>
      </div>
      <div className="tres">
        <div className="tres-img">
          <img src={BHP2} alt="BHP" />
        </div>
        <div className="tres-span">
          <div style={{ marginBottom: "30px" }}>
            <h3>Resultado</h3>
            <span>
              Se revisa el proyecto con el equipo y se aprueba haciéndole correcciones menores para ser presentada al cliente. El diseño es aprobado por la empresa contratante y se aprueba la construcción del proyecto por empresa G°100.
          </span>
          </div>
          <div >
            <h3>Realización técnica</h3>
            <span >
              Se utilizó Vectorworks para el levantamiento 3d del espacio y Artlantis para generar las propuestas de materialidad y colores.
            </span>
          </div>
        </div>
      </div>
      <div className="cuatro">
        <img src={BHP3} alt="BHP" />
      </div>
    </div>
  </div>
)

export default CafeteriaBHP
