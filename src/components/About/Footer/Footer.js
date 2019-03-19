import React, { Component } from 'react'
import './Footer.css'
import Fade from 'react-reveal/Fade';

import Button from '../../Global/Button';


class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <Fade delay={1050}>
                        <h1 className="paddingAdjust">Let's hustle together & Get you up there</h1>
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