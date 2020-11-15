import React from "react"

import Layout from "../components/Layout/Layout"
import Navbar from "../components/Nav/Navbar"
import Hero from "../components/Hero/Hero"
import ProjectShowcase from "../components/ProjectShowcase/ProjectShowcase"
import About from "../components/About/About"
import Skills from "../components/Skills/Skills"
import Contact from "../components/Contact/Contact"
import SEO from "../components/Seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navbar />
    <Hero />
    <div style={{ backgroundColor: "rgb(0, 123, 145)", height: "150px" }}></div>
    <ProjectShowcase />
    <About />
    <Skills />
    <Contact />
  </Layout>
)

export default IndexPage
