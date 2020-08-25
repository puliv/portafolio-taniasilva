import React from "react"
import ProjectsTitle from "../components/projects/projectsTitle"
import sumate from '../images/sumate.png'
import foto1 from "../images/verde4.jpg"
import foto2 from "../images/verde1.jpg"
import foto3 from "../images/verde3.jpg"
import foto4 from "../images/verde7.png"
import foto5 from "../images/verde8.png"
import foto6 from "../images/verde9.jpg"
import foto7 from "../images/verde10.jpg"
import foto8 from "../images/verde11.jpg"
import foto9 from "../images/verde12.png"
import foto10 from "../images/verde13.png"
import foto11 from "../images/verde14.png"
import foto12 from "../images/verde15.png"
import foto13 from "../images/verde16.png"
import foto14 from "../images/verde17.png"
import foto15 from "../images/verde18.png"
import foto16 from "../images/verde19.png"
import foto17 from "../images/verde20.png"
import foto18 from "../images/verde21.png"
import foto19 from "../images/verde22.png"
import foto20 from "../images/verde23.png"
import foto21 from "../images/verde24.png"
import foto22 from "../images/verde25.png"
import user1 from "../images/verde_user1.png"
import user2 from "../images/verde_user2.png"
import user3 from "../images/verde_user3.png"
import img1 from "../images/verde_pantalla5.png"
import ProjectsHeader from "../components/projects/projectsHeader"


const SumateALoVerde = () => (
  <div className="sumate-verde">
    <ProjectsHeader />
    <ProjectsTitle title={"Sumate a lo Verde"} image={sumate} />
    <div>
      <div className="uno">
        <span>
          Como equipo UX se nos da a escoger un tema a desarrollar y debido al interés medio ambiental, se decidió generar una app que facilite información sobre el complicado tema de ser agentes de cambios. Es por esto que nos preguntamos ¿cuál es el contenido que se necesita para motiva a ayudar al medio ambiente? El proyecto se dividió en 4 módulo, donde todos tenían una parte teórica y luego práctica. Cada equipo trabajaba en su proyecto y luego se hacían feedback entre compañeros, generando un trabajo colaborativo
        </span>
      </div>
      {/* UX EMPHATISE */}
      <div className="line">
        <hr />
        <h3>UX EMPHATISE</h3>
      </div>
      <div className="dos">
        <div className="a">
          <img src={foto1} alt="Sumate a lo verde" />
          <hr />
          <span>Análisis: Aterrizaje del problema.</span>
        </div>
        <div className="b">
          <span className="b-span">
            En esta primera etapa UX, se presentó la metodología base para generar la experiencia del usuario, la Empatía. Con esto se generó cercanía y entendimiento de quién es nuestro usuario y qué necesita.
          </span>
          <img src={foto2} alt="Sumate a lo verde" />
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
        <div className="tres-img-user">
          <img src={user1} alt="Sumate a lo verde" />
          <img src={user2} alt="Sumate a lo verde" />
          <img src={user3} alt="Sumate a lo verde" />
        </div>
        <div className="line-b">
          <hr />
          <h3>Caracterización del usuario</h3>
        </div>
      </div>
      <div className="cuatro">
        <div className="a">
          <img src={img1} alt="Sumate a lo verde" />
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
          <img src={foto3} alt="Sumate a lo verde" />
          <hr />
          <span>Card Sorting presencial.</span>
        </div>
        <div className="b">
          <img src={foto4} alt="Sumate a lo verde" />
          <hr />
          <span>Card Sorting.</span>
        </div>
      </div>
      <div className="seis">
        <img src={foto5} alt="Sumate a lo verde" />
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
          <div>
            <img src={foto6} alt="Sumate a lo verde" />
            <hr />
            <span>Sketching y diseño de wireframes.</span>
          </div>
          <div>
            <img src={foto7} alt="Sumate a lo verde" />
          </div>
          <div>
            <img src={foto8} alt="Sumate a lo verde" />
            <hr />
            <span>Moodboard.</span>
          </div>
        </div>

      </div>
      <div className="line">
        <hr />
        <h3>PROTOTIPO EN BAJA</h3>
      </div>
      <div className="ocho">
        <span>Para el desarrollo de la aplicación, se utilizó el Adobe XD para prototipar los primeros flujos de tarea.</span>
        <div>
          <img src={foto9} alt="verde" />
          <img src={foto10} alt="verde" />
        </div>
      </div>
      <div className="line">
        <hr />
        <h3>UX TESTING</h3>
      </div>
      <div className="nueve">
        <div className="nueve-a">
          <div>
            <span>En esta última etapa se evaluó el prototipo en baja, desde el diseño y navegación hasta la utilidad y experiencia, utilizando evaluaciones como Test de usabilidad, Mapa de calor, A/B testing y Evaluación heurística. Los resultados en cuanto a contenido y arquitectura de la información fueron positivos, ya que se entendía y quedaban claros, motivaban al usuario a querer utilizar la aplicación. Por otro lado, la visualización de la aplicación no fue satisfactoria, por lo que se rediseñó la gráfica (color, tamaño, ilustración).
        </span>
          </div>
          <div>
            <img src={foto11} alt="verde" />
          </div>
        </div>
        <div className="nueve-b">
          <div>
            <img src={foto12} alt="verde" />

            <hr />
            <h3>Test de usabilidad</h3>

          </div>
          <div>
            <img src={foto13} alt="verde" />
          </div>
        </div>
        <div className="nueve-c">
          <div>
            <img src={foto14} alt="verde" />
            <hr />
            <h3>Mapa de calor.</h3>
          </div>
          <div>
            <img src={foto15} alt="verde" />
            <hr />
            <h3>A/B Testing</h3>
          </div>
        </div>
      </div>
      <div className="line">
        <hr />
        <h3>UX MOCKUP</h3>
      </div>
      <div className="diez">
        <div className="diez-a">
          <div className="diez-img">
            <div>
              <img src={foto16} alt="verde" />
            </div>
            <div>
              <img src={foto17} alt="verde" />
            </div>
            <div>
              <img src={foto18} alt="verde" />
            </div>
          </div>
          <div className="diez-span">
            <span>
              El desarrollo de este proyecto fue un gran desafío, por el alto nivel de información sintetizada en una aplicación y los diferentes tipos de usuarios que abordar, desde niños, jóvenes hasta adultos, ya que todos estamos en diferentes niveles de formación y cambiar hábitos es una acción difícil de generar, por la necesidad de conseguir las cosas de manera rápida y fácil. El prototipo final presentado alcanza un buen nivel de testeo, sin embargo, podrían realizarse mejoras si se continuara en el proyecto.

        </span>
          </div>
        </div>
        <div className="diez-b">
          <div>
            <img src={foto19} alt="verde" />
          </div>
          <div>
            <img src={foto20} alt="verde" />
          </div>
          <div>
            <img src={foto21} alt="verde" />
          </div>
          <div>
            <img src={foto22} alt="verde" />
          </div>

        </div>
      </div>
    </div>
  </div>
)

export default SumateALoVerde
