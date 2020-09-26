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
              Patrem es una consultora que ayuda a empresas y emprendedores a solucionar sus problemas estratégicos y de gestión.
          </span>
          </div>
          <div style={{ marginBottom: "15px" }}>
            <span >
              La empresa solicitó la creación del templeit corporativo, el cual se utilizará para presentar le a los clientes qué es Patrem, qué es lo que hace y la metodología de trabajo que desarrolló y ocupa para dar soluciones a las empresas que solicitan el servicio.
          </span>
          </div>
          <div>
            <span>
              Se me entrega la información y algunas referencias de esquemas que han estado utilizando. Ocupo los colores del logo y el recurso de degradado para la gráfica. Sintetizo la información, junto todos los esquemas en un mismo estilo gráfico y ocupo íconos para hacer más fácil la lectura.
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
