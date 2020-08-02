import React from "react"
// import { Link } from "gatsby"
import ProjectsTitle from "./projectsTitle"
import sumate from '../../images/sumate.png'
import foto1 from '../../images/verde4.png'


const SumateALoVerde = () => (
  <div className="sumate-verde">
    <ProjectsTitle title={"Sumate a lo Verde"} image={sumate} />
    <div>
      <div className="uno">
        <span>
          Como equipo UX se nos da a escoger un tema a desarrollar y debido al interés medio ambiental, se decidió generar una app que facilite información sobre el complicado tema de ser agentes de cambios. Es por esto que nos preguntamos ¿cuál es el contenido que se necesita para motiva a ayudar al medio ambiente? El proyecto se dividió en 4 módulo, donde todos tenían una parte teórica y luego práctica. Cada equipo trabajaba en su proyecto y luego se hacían feedback entre compañeros, generando un trabajo colaborativo
        </span>
        {/* <img src={} alt="img"/> */}
      </div>
      <div className="line">
        <hr />
        <h3>UX EMPHATISE</h3>
      </div>
      <div className="dos">
        <div >
          <img src={foto1} alt="image" />
        </div>
        <div></div>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
)

export default SumateALoVerde
