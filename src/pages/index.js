import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Inicio from "../components/inicio"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Inicio />
  </Layout>
)

export default IndexPage
