import React, { Component } from 'react'
import { Link } from 'gatsby';
import "./Hero.css";
import Fade from 'react-reveal/Fade';

import Header from '../Global/Header';
import Button from '../Global/Button';
import Image from './Details/Image';

// ICONS

import { FaFacebookF, FaInstagram, FaBehance, FaDribbble } from 'react-icons/fa';

class Hero extends Component {
    render() {
        return (
            <div className="Hero">
                <div className="container">
                    <Header />
                    <div className="heroHeader">
                        <h1 className="heroHeading d-flex">
                            <Fade bottom duration={500} delay={1000}>Makin'</Fade>
                            <Fade bottom duration={500} delay={1100}> it,</Fade>
                            <Fade bottom duration={500} delay={1200}> Killin'</Fade>
                            <Fade bottom duration={500} delay={1300}> it,</Fade>
                            <Fade bottom duration={500} delay={1400}> Doing'</Fade>
                            <Fade bottom duration={500} delay={1500}> it</Fade>
                            <Fade bottom duration={500} delay={1600}> better</Fade>
                        </h1>
                        <Fade delay={700}>
                            <p className="heroDescription">A digital & development agency</p>
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
                                <Image/>
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
