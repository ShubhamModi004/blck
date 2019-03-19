import React from "react"

import Layout from "../components/layout"
import Hero from '../components/Services/Hero'
import Services from '../components/Services/Services/Services'
import Footer from '../components/Services/Footer/Footer'
import FooterBottom from '../components/Home/Footer/FooterBottom';

import SEO from "../components/seo"

const ServicePage = () => (
    <Layout>
        <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
        <Hero />
        <Services />
        <Footer />
        <FooterBottom />
    </Layout>
)

export default ServicePage
