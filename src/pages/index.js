import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Inicio from "../components/inicio"
import About from "../components/about"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Inicio />
    <About />
    <Contact />
  </Layout>
)

export default IndexPage
