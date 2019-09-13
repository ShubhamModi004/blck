import React, { Component } from 'react'
import { Link } from 'gatsby';
import './Work.css'
import Fade from 'react-reveal/Fade';

import ButtonB from '../../Global/ButtonB';

import Website from './Website';

class Work extends Component {
    render() {
        return (
            <div>
                <div className="hideOverflow">
                    <h1 className="heroHeading d-flex">
                        <Fade bottom duration={500} delay={1000}>Watch</Fade>
                        <Fade bottom duration={500} delay={1100}> us</Fade>
                        <Fade bottom duration={500} delay={1200}> in</Fade>
                        <Fade bottom duration={500} delay={1300}> action</Fade>
                    </h1>
                </div>
                <div className="firstProject Project">
                    <div class="singleProject">
                        <div className="hideOverflow"><Fade duration={1000}><Website /></Fade></div>
                        <h2>Project Name</h2>
                        <p>Domain</p>
                    </div>
                    <div className="caseLink">
                        <Link to="/">READ CASE</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="Project">
                            <div class="singleProject">
                                <div className="hideOverflow"><Fade duration={1000}><Website /></Fade></div>
                                <h2>Project Name</h2>
                                <p>Domain</p>
                            </div>
                            <div className="caseLink">
                                <Link to="/">READ CASE</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="Project">
                            <div class="singleProject">
                                <div className="hideOverflow"><Fade duration={1000}><Website /></Fade></div>
                                <h2>Project Name</h2>
                                <p>Domain</p>
                            </div>
                            <div className="caseLink">
                                <Link to="/">READ CASE</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center centerElement">
                    <ButtonB title="VIEW MORE" link="/" />
                </div>
            </div>
        )
    }
}

export default Work;
