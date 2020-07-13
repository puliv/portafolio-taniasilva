import React from "react"
// import { graphql } from 'gatsby'
// import Img from 'gatsby-image'
import detail from "../images/detail_2.png"
// import AboutImg from "./aboutImg"


const about = () => {
  return (
    <section className="about">
      <div className="about-text">
        <div className="about-left">
          <div className="about-img">

          </div>
        </div>
        <div className="about-right">
          <h3>Sobre mi</h3>
          <img
            src={detail}
            alt="detail"
            className="about-detail"
          />
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
        <h3>Habilidades Profesionales</h3>
        <img
          src={detail}
          alt="detail"
          className="about-detail"
        />

        <div className="about-list">
          <div className="about-item 1">
            <div className="about-item-img">
              {/* <Img fixed={data.aboutIcon1.childImageSharp.fixed} alt="uno" /> */}
              {/* <AboutImg /> */}
            </div>
            <div className="about-item-text">
              <h4>INVESTIGACIÓN Y ESTRATEGÍA UX</h4>
              <h5>
                Agregando valor al proceso de gestión, con la capacidad de construir soluciones basadass en
                una búsqueda profunda de la experiencia del usuario.
            </h5>
            </div>
          </div>

          <div className="about-item 2">
            <div className="about-item-img">
              {/* <Img fixed={data.aboutIcon2.childImageSharp.fixed} alt="dos" /> */}
            </div>
            <div className="about-item-text">
              <h4>HERRAMIENTAS DIGITALES</h4>
              <h5>
                Conocomientos de herramienta Digitales Adobe AI, PH, IN y XD; Aemas de programas de
                diseño 3D y planos como Autocad, 3dsMax, Artlantis y Vectorworks
            </h5>
            </div>
          </div>

          <div className="about-item 3">
            <div className="about-item-img">
              {/* <Img fixed={data.aboutIcon3.childImageSharp.fixed} alt="tres" /> */}
            </div>
            <div className="about-item-text">
              <h4>DESIGN THINKING</h4>
              <h5>
                Conocimiento de esta herramienta generadora de innovación, la que permite saber dominar los desafíos de manera sistemática, colaborativa y eficiente; dando como resultado el poder encontrar ideas y soluciones para distinta áreas.
            </h5>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

// about.propTypes = {
//   data: PropTypes.object.isRequired
// }

// export const query = graphql`
//   query about{
//     aboutIcon1: file(relativePath: { eq: "icono-1.png"}) {
//       childImageSharp {
//         fixed(width: 100) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
// }
// `

export default about
