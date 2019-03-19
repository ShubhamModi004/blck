import React, { Component } from 'react'
import './Footer.css'
import Fade from 'react-reveal/Fade';

import Button from '../../Global/Button';


class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="hideOverflow">
                        <h1 className="heroHeading d-flex">
                            <Fade bottom duration={500} delay={1000}>Our</Fade>
                            <Fade bottom duration={500} delay={1100}>Friends</Fade>
                        </h1>
                    </div>
                    <div className="row clients">
                        <div className="col-md-3">client</div>
                        <div className="col-md-3">client</div>
                        <div className="col-md-3">client</div>
                        <div className="col-md-3">client</div>
                    </div>
                    <div className="row clients">
                        <div className="col-md-3">client</div>
                        <div className="col-md-3">client</div>
                        <div className="col-md-3">client</div>
                        <div className="col-md-3">client</div>
                    </div>
                    <div className="row clients">
                        <div className="col-md-3">client</div>
                        <div className="col-md-3">client</div>
                        <div className="col-md-3">client</div>
                        <div className="col-md-3">client</div>
                    </div>
                    <Fade delay={1050}>
                        <h1 className="paddingAdjust">We like building great products,
                        <br/>but we love building great relationships</h1>
                    </Fade>
                    <div className="hideOverflow">
                    <Fade left delay={1100}>
                        <Button title="GET STARTED" link="/" />
                    </Fade>
                    </div>
                </div>
            </div>
        )
    }
}


export default Footer;