import React, { Component } from 'react'
import './About.css'
import Fade from 'react-reveal/Fade';


import Button from '../../Global/Button';
import ButtonB from '../../Global/ButtonB';
import Work from '../Work/Work';

// Images
import Website from './Website';
import MobileApp from './MobileApp';
import Branding from './Branding';
import DigitalMarketing from './DigitalMarketing';

class About extends Component {
    render() {
        return (
            <div className="homeAbout">
                <div className="container">
                    <div className="hideOverflow">
                    <h1 className="heroHeading d-flex">
                        <Fade bottom duration={500} delay={1000}>Elevate</Fade>
                        <Fade bottom duration={500} delay={1100}> your</Fade>
                        <Fade bottom duration={500} delay={1200}> digital</Fade>
                        <Fade bottom duration={500} delay={1300}> game</Fade>
                    </h1>
                    </div>
                    <Fade delay={700}>
                        <p className="aboutDescription">Blck makes your customer's experience worthwhile. It's not just about making a sassy website or a mobile app anymore.
                        <br/>People love functional, clean and minimal approach to design to get their task at hand, accomplished.
                        <br/>Meet your next digital partners who create a delightful journey for your users.
                        </p>
                    </Fade>
                    <div className="hideOverflow">
                        <Fade left delay={900}><Button title="ABOUT US" link="/" /></Fade>
                    </div>
                    <Fade bottom cascade delay={500}>
                        <div className="hideOverflow">
                            <h1 className="heroHeading d-flex">
                                <Fade bottom duration={500} delay={1000}>Our</Fade>
                                <Fade bottom duration={500} delay={1100}> Touchpoints</Fade>
                            </h1>
                        </div>
                    </Fade>
                    <div className="row services">
                        <div className="col-md-3 service">
                            <div className="placeholderImage"><div className="hideOverflow"><Fade bottom duration={1000}><Website/></Fade></div></div>
                            <Fade><h2 className="text-center">Websites</h2></Fade>
                        </div>
                        <div className="col-md-3 service">
                            <div className="placeholderImage"><div className="hideOverflow"><Fade bottom duration={1000}><MobileApp /></Fade></div></div>                        
                            <Fade><h2 className="text-center">Mobile<br />Apps</h2></Fade>
                        </div>
                        <div className="col-md-3 service">
                            <div className="placeholderImage"><div className="hideOverflow"><Fade bottom duration={1000}><Branding /></Fade></div></div>
                            <Fade><h2 className="text-center">Branding</h2></Fade>
                        </div>
                        <div className="col-md-3 service">
                            <div className="placeholderImage"><div className="hideOverflow"><Fade bottom duration={1000}><DigitalMarketing /></Fade></div> </div>                 
                            <Fade><h2 className="text-center">Social Media<br/>Marketing</h2></Fade>
                        </div>
                    </div>
                    <div className="text-center centerElement">
                        <ButtonB title="SERVICES" link="/" />
                    </div>
                    <Work />
                </div>
            </div>
        )
    }
}

export default About;
