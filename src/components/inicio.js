import React from "react"
// import { Link } from "gatsby"
import Image from "../components/image"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"

const Inicio = () => (
  <section className="inicio">
    <div className="inicio-left">
      <h1>¡Hola!</h1>
      <h1>Soy Tania Silva</h1>
    </div>
    <div className="inicio-right">
      <h3>Diseñadora </h3>
      <h3>Industrial y UX</h3>
      <div className="inicio-img">
        <Image />
        {/* <Img fluid={data.placeholderImage.childImageSharp.fluid} /> */}
      </div>
    </div>
  </section>
)

export default Inicio

// export const data = useStaticQuery(graphql`
//     query {
//       placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
//         childImageSharp {
//           fluid(maxWidth: 300) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   `)
