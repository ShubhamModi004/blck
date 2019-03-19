import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const DigitalMarketing = () => (
    <StaticQuery
        query={graphql`
        query {
            placeholderImage: file(relativePath: { eq: "digitalMarketing.jpg" }) {
            childImageSharp {
                fluid{
                ...GatsbyImageSharpFluid
                }
            }
            }
        }
    `}
        render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
    />
)
export default DigitalMarketing
