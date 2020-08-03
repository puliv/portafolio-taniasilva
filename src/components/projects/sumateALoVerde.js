import React from "react"
import ProjectsTitle from "./projectsTitle"
import sumate from '../../images/sumate.png'
import foto1 from "../../images/verde4.jpg"
import foto2 from "../../images/verde1.jpg"
import foto3 from "../../images/verde3.jpg"
import foto4 from "../../images/verde7.png"
import foto5 from "../../images/verde8.png"
import foto6 from "../../images/verde9.jpg"
import foto7 from "../../images/verde10.jpg"
import foto8 from "../../images/verde11.jpg"
import user1 from "../../images/verde_user1.png"
import user2 from "../../images/verde_user2.png"
import user3 from "../../images/verde_user3.png"
import img1 from "../../images/verde_pantalla5.png"



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
      {/* UX EMPHATISE */}
      <div className="line">
        <hr />
        <h3>UX EMPHATISE</h3>
      </div>
      <div className="dos">
        <div className="a">
          <img src={foto1} alt="image" />
          <hr />
          <span>Análisis: Aterrizaje del problema.</span>
        </div>
        <div className="b">
          <span className="b-span">
            En esta primera etapa UX, se presentó la metodología base para generar la experiencia del usuario, la Empatía. Con esto se generó cercanía y entendimiento de quién es nuestro usuario y qué necesita.
          </span>
          <img src={foto2} alt="image" />
          <hr />
          <span>Mapa de empatía.</span>
        </div>
      </div>
      {/* UX RESEARCH */}
      <div className="line">
        <hr />
        <h3>UX RESEARCH</h3>
      </div>
      <div className="tres">
        <span>
          La segunda etapa se enfocó en la investigación del usuario objetivo, para así fundamentar las bases del proyecto, confirmando al usuario y diseñando el producto que necesita. Se comenzó el User research, creando entrevistas que entreguen datos cuantitativos y cualitativos, de los patrones de comportamientos del usuario, lo que ayudó a definir los arquetipos (metodología Humulu).
        </span>
        <div>
          <img src={user1} alt="image" />
          <img src={user2} alt="image" />
          <img src={user3} alt="image" />
        </div>
        <div className="line-b">
          <hr />
          <h3>Caracterización del usuario</h3>
        </div>
      </div>
      <div className="cuatro">
        <div className="a">
          <img src={img1} alt="image" />
          <hr />
          <span>Customer Journey Map.</span>
        </div>
        <div className="b">
          <span>Una vez entendido los usuarios y sus necesidades, se planteó la pregunta ¿qué contenido y cómo se lo entrego?, la cual fue respondida en base a distintas técnicas que mostraban las interacciones del usuario para conocer su dinámica mental, tales como Customer Journey Map, User Task, Card Sorting.
          </span>
          <span>En base a esto se dividió la aplicación en dos funciones principales, la primera el informar lo que sucede actualmente con el medio ambiente, y la segunda enseñarle cuáles son las acciones que puede hacer para ayudar. Esta estructura básica dió paso al inicio del diseño, definiendo las categorías de la app y mostrando las tareas que se debe realizar.
          </span>
        </div>
      </div>
      <div className="cinco">
        <div className="a">
          <img src={foto3} alt="image" />
          <hr />
          <span>Card Sorting presencial.</span>
        </div>
        <div className="b">
          <img src={foto4} alt="image" />
          <hr />
          <span>Card Sorting.</span>
        </div>
      </div>
      <div className="seis">
        <img src={foto5} alt="image" />
      </div>
      <div className="line">
        <hr />
        <h3>UX DESIGN</h3>
      </div>
      <div className="siete">
        <span>
          Durante la tercera etapa, comenzamos a visualizar el producto digital, desde sus colores, texturas, flujos y esquemas, todo aludiendo a la naturaleza y las personas como agentes de cambio. Se utilizó herramientas como el moodboard, sketching y diseño de wireframes.
        </span>
        <div className="siete-images">
          <img src={foto6} alt="image" />
          <img src={foto7} alt="image" />
          <img src={foto8} alt="image" />
        </div>
        <div className="bottoms">
          <div>
            <hr />
            <span>Card Sorting presencial.</span>
          </div>
          <div>
            <hr />
            <span>Card Sorting presencial.</span>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
)

export default SumateALoVerde
