import React from "react"
import detail from "../images/detail_1.png"

const Inicio = () => (
  <section className="inicio" id="inicio">
    <div className="inicio-left">
      <h1>¡Hola!</h1>
      <h1>Soy Tania Silva</h1>
    </div>
    <div className="inicio-right">
      <h1 className="right-h2">Tania Silva</h1>
      <h3>Diseñadora </h3>
      <h3>Industrial y UX/UI</h3>
      <div className="inicio-img">
        <img src={"https://github.com/TaniaSilvaTala/portafolio/blob/source/src/images/flores.jpg?raw=true"} alt="inicio" />
      </div>
      <img
        src={detail}
        alt="detail"
        className="inicio-detail"
      />
    </div>
  </section>
)

export default Inicio
