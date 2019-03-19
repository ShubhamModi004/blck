import React, { Component } from 'react'
import './Footer.css';
import Fade from 'react-reveal/Fade';



class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="team">
                        <div className="row">
                            <div className="col-md-6 col-6 col-sm-6">
                                <div className="sticky-top">
                                    <Fade duration={3000}><h1 className="mt-5">How we do it?</h1></Fade>
                                </div>
                            </div>
                            <div className="col-md-6 col-6 col-sm-6 values">
                                <div className="serviceWork mb-5"></div>
                                <Fade duration={3000}><h2 style={{ color: '#fff' }}>Strategy & Planning</h2></Fade>
                                <Fade duration={3000} delay={500}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis nibh gravida, gravida nisl ac, imperdiet sem. </p></Fade>
                                
                                <div className="serviceWork mb-5"></div>
                                <Fade duration={3000}><h2 style={{ color: '#fff' }}>Ideation / Prototyping</h2></Fade>
                                <Fade duration={3000} delay={500}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis nibh gravida, gravida nisl ac, imperdiet sem. </p></Fade>
                                
                                <div className="serviceWork mb-5"></div>
                                <Fade duration={3000}><h2 style={{ color: '#fff' }}>Implementation</h2></Fade>
                                <Fade duration={3000} delay={500}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis nibh gravida, gravida nisl ac, imperdiet sem. </p></Fade>
                                
                                <div className="serviceWork mb-5"></div>
                                <Fade duration={3000}><h2 style={{ color: '#fff' }}>Launch</h2></Fade>
                                <Fade duration={3000} delay={500}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis nibh gravida, gravida nisl ac, imperdiet sem. </p></Fade>
                                
                                <div className="serviceWork mb-5"></div>
                                <Fade duration={3000}><h2 style={{ color: '#fff' }}>Growth & support</h2></Fade>
                                <Fade duration={3000} delay={500}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis nibh gravida, gravida nisl ac, imperdiet sem. </p></Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Footer;