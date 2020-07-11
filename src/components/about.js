import React from "react"
import detail from "../images/detail_2.png"

const About = () => (
  <section className="about">
    <div className="about-left">
      {/* <Image /> */}
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
  </section>
)

export default About