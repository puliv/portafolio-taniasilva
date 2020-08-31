import React from "react"
import detail from "../images/detail_2.png"
import icon1 from '../images/icono-1.png'
import icon2 from '../images/icono-2.png'
import icon3 from '../images/icono-3.png'
import tania from '../images/about_me.jpg'



const about = () => {
  return (
    <section className="about">
      <div className="about-me">
        <div className="about-left">
          <div className="about-img">
            <img
              src={tania}
              alt="yo"
            />
          </div>
        </div>
        <div className="about-right">
          <div className="about-title">
            <h3>Sobre mi</h3>
          </div>
          <div className="about-detail">
            <img
              src={detail}
              alt="detail"
              className="about-detail-img"
            />
          </div>
          <div className="about-text">
            <h4>
              Hola mi nombre es Tania, amante del diseño, titulada de la Universidad Diego Portales de la carrera Diseño Industrial y Diseñadora Ux; especialización realizada en un diplomado de la Universidad Finis Terrae. Estoy constantemente ampliando conocimientos, aprendiendo nuevas metodologías y herramientas, para lograr resultados positivos.
            </h4>
            <h4>
              Soy una persona flexible, rigurosa y con una gran capacidad de toma efectiva de decisiones, con aptitud de liderazgo y trabajo en equipo de manera colaborativa. Creativa, observadora y comprometida, preocupada siempre de cumplir en tiempo y forma sus objetivos.
            </h4>
          </div>
        </div>
      </div>

      <div className="about-skills">
        <div className="about-title">
          <h3>Habilidades Profesionales</h3>
          <img
            src={detail}
            alt="detail"
            className="about-detail"
          />
        </div>
        <div className="about-list">
          <div className="about-item">
            <div className="about-item-img">
              <img src={icon1} alt="uno" />
            </div>

            <div className="about-item-text">
              <h4>INVESTIGACIÓN Y ESTRATEGÍA UX</h4>
              <h5>
                Agregando valor al proceso de gestión, con la capacidad de construir soluciones basadas en
                una búsqueda profunda de la experiencia del usuario.
            </h5>
            </div>
          </div>

          <div className="line">
            <hr />
          </div>

          <div className="about-item">
            <div className="about-item-img">
              <img src={icon2} alt="dos" />
            </div>
            <div className="about-item-text">
              <h4>HERRAMIENTAS DIGITALES</h4>
              <h5>
                Conocimientos de herramientas Digitales Adobe AI, PH, IN y XD; Además de programas de
                diseño 3D y planos como Autocad, 3dsMax, Artlantis y Vectorworks
            </h5>
            </div>
          </div>

          <div className="line">
            <hr />
          </div>

          <div className="about-item">
            <div className="about-item-img">
              <img src={icon3} alt="tres" />
            </div>
            <div className="about-item-text">
              <h4>DESIGN THINKING</h4>
              <h5>
                Conocimiento de esta herramienta generadora de innovación, la que permite dominar los desafíos de manera sistemática, colaborativa y eficiente; dando como resultado el poder encontrar ideas y soluciones para distintas áreas.
            </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default about
