import React from "react"

import Layout from "../components/layout"
import Hero from '../components/About/Hero'
import Details from '../components/About/Details/Details'
import Footer from '../components/About/Footer/Footer'
import FooterBottom from '../components/Home/Footer/FooterBottom';

import SEO from "../components/seo"

const AboutPage = () => (
    <Layout>
        <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
        <Hero />
        <Details />
        <Footer />
        <FooterBottom />
    </Layout>
)

export default AboutPage
