import React from "react"

import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero"
import ProjectShowcase from "../components/ProjectShowcase/ProjectShowcase"
import About from "../components/About/About"
import Skills from "../components/Skills/Skills"
import Contact from "../components/Contact/Contact"
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
