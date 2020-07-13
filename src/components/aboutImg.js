import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function aboutImg() {
  const data = useStaticQuery(graphql`
  {
    iconoSobremiUno: file(relativePath: { eq: "icono-1.png" }) {
      childImageSharp {
        fixed(width: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
  `)

  return <Img fixed={data.iconoSobremiUno.childImageSharp.fixed} alt="hola" />
}