import React, { Component } from 'react'
import { Link } from 'gatsby';
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
        <div className="">
          <Header />
          <div className="heroHeader container">
            <div className="hideOverflow">
              <h1 className="heroHeading d-flex">
                <Fade duration={500} delay={1000}>Humanize your digital realm</Fade>
              </h1>
            </div>
            <Fade delay={700}>
              <p className="heroDescription">A digital & development agency</p>
            </Fade>
            <div className="hideOverflow">
              <Fade left delay={900}><Button title="GET IN TOUCH" link="/" /></Fade>
            </div>
          </div>
          <div className="socialMedia">
            <Fade right delay={1200}>
              <a href="https://instagram.com/blck_studios?igshid=gx937dl4jd32"><FaInstagram color='white' /></a>
            </Fade>
            <Fade right delay={1400}>
              <a href="https://www.behance.net/sohail_0707"><FaBehance color='white' /></a>
            </Fade>
            <Fade right delay={1600}>
              <a href="https://dribbble.com/sohail_minimalist"><FaDribbble color='white' /></a>
            </Fade>
          </div>
        </div>
      </div>


    )
  }
}

export default Hero;
