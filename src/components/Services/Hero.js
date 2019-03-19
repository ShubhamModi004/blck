import React, { Component } from 'react'
import { Link } from 'gatsby';
import Fade from 'react-reveal/Fade';

import Header from '../Global/Header';
import Button from '../Global/Button';

// ICONS

import { FaFacebookF, FaInstagram, FaBehance, FaDribbble } from 'react-icons/fa';

class Hero extends Component {
    render() {
        const seviceHeight= {
            height: '100vh'
        }
        return (
            <div className="Hero" style={seviceHeight}>
                <div className="container">
                    <Header />
                    <div className="heroHeader">
                        <h1 className="heroHeading d-flex">
                            <Fade bottom duration={500} delay={1000}>Driving</Fade>
                            <Fade bottom duration={500} delay={1100}> your</Fade>
                            <Fade bottom duration={500} delay={1200}> brand</Fade>
                            <Fade bottom duration={500} delay={1300}>forward</Fade>
                        </h1>
                        <Fade delay={700}>
                            <p className="heroDescription">We are all about strategy, implementation & coffee</p>
                        </Fade>
                    </div>
                    <div className="row marginFix">
                        <div className="col-md-1 col-sm-1 col-1">
                            <div className="scoll">
                                <div className="scrollLine">
                                </div>
                                <div className="scrollLineThick">
                                </div>
                                <div className="scrollTag">
                                    <p className="scrollWord">SCROLL</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-10 col-10 col-sm-10">
                            <div className="heroImage">
                               
                            </div>
                        </div>
                        <div className="col-md-1 col-sm-1 col-1">
                            <div className="socialMedia">
                                <Fade right delay={1000}>
                                    <FaFacebookF color='white' />
                                </Fade>
                                <Fade right delay={1200}>
                                    <FaInstagram color='white' />
                                </Fade>
                                <Fade right delay={1400}>
                                    <FaBehance color='white' />
                                </Fade>
                                <Fade right delay={1600}>
                                    <FaDribbble color='white' />
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hero;
