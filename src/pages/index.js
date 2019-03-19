import React from "react"

import Layout from "../components/layout"
import Hero from '../components/Home/Hero'
import About from '../components/Home/About/About'
import Footer from '../components/Home/Footer/Footer'
import FooterBottom from '../components/Home/Footer/FooterBottom';

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero/>
    <About />
    <Footer />
    <FooterBottom/>
  </Layout>
)

export default IndexPage
