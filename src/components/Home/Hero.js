import React, { Component } from 'react'
import { Link} from 'gatsby';
import "./Hero.css";
import Fade from 'react-reveal/Fade';

import Header from '../Global/Header';
import Button from '../Global/Button';

// ICONS

import { FaFacebookF, FaInstagram, FaBehance, FaDribbble } from 'react-icons/fa';

class Hero extends Component {
  render() {
    return (
      <div className="Hero">
        <div className="container">
          <Header />
          <div className="heroHeader">
            <div className="hideOverflow">
            <h1 className="heroHeading d-flex">
              <Fade bottom duration={500} delay={1000}>Humanize</Fade>
              <Fade bottom  duration={500} delay={1100}> your</Fade>
              <Fade bottom  duration={500} delay={1200}> digital</Fade>
              <Fade bottom  duration={500} delay={1300}> realm</Fade>
            </h1>
            </div>
            <Fade delay={700}>
            <p className="heroDescription">A digital & development agency</p>
            </Fade>
            <div className="hideOverflow">
              <Fade left delay={900}><Button title="GET IN TOUCH" link="/"/></Fade>
            </div>
          </div>
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
              <FaDribbble color='white'/>
            </Fade>
          </div>
        </div>
      </div>
      

    )
  }
}

export default Hero;
