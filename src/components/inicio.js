import React from "react"
import Image from "../components/image"
import detail from "../images/detail_1.png"

const Inicio = () => (
  <section className="inicio" id="inicio">
    <div className="inicio-left">
      <h1>¡Hola!</h1>
      <h1>Soy Tania Silva</h1>
    </div>
    <div className="inicio-right">
      <h3>Diseñadora </h3>
      <h3>Industrial y UX</h3>
      <div className="inicio-img">
        <Image />
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
