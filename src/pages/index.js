import React from "react"

import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero"
import ProjectShowcase from "../components/ProjectShowcase/ProjectShowcase"
import About from "../components/About"
import Skills from "../components/Skills"
import Contact from "../components/Contact"
import SEO from "../components/Seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <ProjectShowcase />
    <About />
    <Skills />
    <Contact />
  </Layout>
)

export default IndexPage
