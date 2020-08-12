import React from "react"
import brika from '../images/brika-title.png'
import img1 from '../images/brika1.jpg'
import img2 from '../images/brika2.jpg'
import img3 from '../images/brika3.jpg'
import img4 from '../images/brika4.png'
import img5 from '../images/brika5.png'
import img6 from '../images/brika6.png'
import img7 from '../images/brika7.png'
import img8 from '../images/brika8.png'
import img9 from '../images/brika9.png'
import img10 from '../images/brika10.png'
import img11 from '../images/brika11.png'
import img12 from '../images/brika12.jpg'
import img13 from '../images/brika13.jpg'
import img14 from '../images/brika14.png'
import img15 from '../images/brika15.png'
import img16 from '../images/brika16.png'
import img17 from '../images/brika17.png'
import img18 from '../images/brika18.png'
import img19 from '../images/brika19.png'
import img20 from '../images/brika20.jpg'

import ProjectsTitle from "../components/projects/projectsTitle"
import ProjectsHeader from "../components/projects/projectsHeader"

const ProyectoTitulo = () => (
  <div className="proyecto-titulo">
    <ProjectsHeader />
    <ProjectsTitle title={"Proyecto Título"} image={brika} />
    <div>
      <div className="uno">
        <div>
          <span>El proyecto se realizó durante el año 2018, teniendo una primera instancia de evaluación en Julio y luego una segunda evaluación en enero del 2019, donde se defendió todo el proyecto: investigación, el producto realizado, uncional y testeado. Y por último la parte del marketing, es decir posicionamiento de marca y branding, finalizando todo el proyecto con una nota 7.0.
</span>
        </div>
        <div>
          <span>
            Brika es una briqueta fabricada de la cáscara de nuez para ser utilizada como combustible en el asado, reduciendo las huellas ambientales generadas por los combustibles tradicionales, es decir, es una opción más sustentable, ya que no existe tala de árboles en su fabricación y en su proceso de producción no hay quema del producto, lo que elimina la generación de CO2 que se origina al fabricar el carbón.
          </span>
        </div>
        <div className="uno-img">
          <img src={img1} alt="proyecto-titulo" />
        </div>
      </div>
      <div className="dos">
        <div>
          <img src={img2} alt="proyecto-titulo" />
        </div>
        <div>
          <img src={img3} alt="proyecto-titulo" />
        </div>
      </div>
      <div className="tres">
        <div className="tres-a">
          <span>
            Este proceso constó de 3 etapas. La primera y más extensa es la de investigación de antecedentes que fundamentarán la base de proyecto, proporcionando datos sobre las problemáticas de lo ya existente y las ventajas del nuevo producto que se pretende desarrollar. Luego en una segunda etapa se plantean los objetivos del proyecto, se ven los requerimientos y se investiga sobre estos; se pasa a prototipar, experimentar y comparar el producto para obtener un producto mínimo viable que pueda salir al mercado. Además se investiga el mercado existente tanto nacional como internacional con productos similares al que se quiere llegar.
        </span>
        </div>
        <div className="tres-b">
          <img src={img4} alt="proyecto-titulo" />
        </div>
      </div>
      <div className="cuatro">
        <div>
          <div>
            <img src={img5} alt="proyecto-titulo" />
          </div>
          <div>
            <img src={img6} alt="proyecto-titulo" />
          </div>
        </div>
        <div>
          <div>
            <img src={img7} alt="proyecto-titulo" />
          </div>
          <div>
            <img src={img8} alt="proyecto-titulo" />
          </div>
        </div>
        <div className="cuatro-img">
          <img src={img9} alt="proyecto-titulo" />
        </div>
      </div>
      <div className="cinco">
        <div className="cinco-a">
          <div>
            <span>
              Por último la tercera etapa, donde se presenta el producto final con sus especificaciones técnicas de producción, validación por medio del testeo con el usuario especifico y se ve la parte del marketing del producto que incluye branding, posicionamiento en el mercado, diferenciación de marca y costos.
</span>
          </div>
          <div className="cinco-img">
            <img src={img10} alt="proyecto-titulo" />
          </div>
        </div>
        <div className="cinco-b">
          <div>
            <img src={img11} alt="proyecto-titulo" />
          </div>
          <div className="cinco-img">
            <div>
              <img src={img12} alt="proyecto-titulo" />
            </div>
            <div>
              <img src={img13} alt="proyecto-titulo" />
            </div>
          </div>
        </div>
      </div>
      <div className="seis">
        <div className="seis-a">
          <div>
            <img src={img14} alt="proyecto-titulo" />
          </div>
          <div className="seis-a-img">
            <img src={img15} alt="proyecto-titulo" />
          </div>
        </div>
        <div className="seis-b">
          <div>
            <img src={img16} alt="proyecto-titulo" />
          </div>
          <div>
            <img src={img17} alt="proyecto-titulo" />
          </div>
        </div>
        <div className="seis-c">
          <div>
            <img src={img18} alt="proyecto-titulo" />
          </div>
          <div className="seis-c-img">
            <img src={img19} alt="proyecto-titulo" />
          </div>
        </div>
        <div className="seis-d">
          <div className="seis-d-img">
            <img src={img20} alt="proyecto-titulo" />
          </div>
          <div className="seis-d-span">
            <span>
              Brika es un producto local con los tres ámbitos de innovación social, ambiental y económico; y con un gran potencial comercial, lo cual fue reconocido en un taller de emprendimiento realizado en la Facultad de Ingeniería Comercial de la Universidad Diego Portales, el cual terminó con un fondo concursable donde obtuvo el segundo lugar.
          </span>
          </div>
        </div>
      </div>
    </div>
  </div >
)

export default ProyectoTitulo
