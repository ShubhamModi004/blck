import React, { Component } from 'react'
import './Details.css'
import Fade from 'react-reveal/Fade';



class Details extends Component {
    

    render() {
        const marginFix= {
            paddingTop: '30vh',
            marginBottom: '15vh',
            lineHeight: '3rem'
        }
        return (
            <div className="homeAbout">
                <div className="container elementsCenter">
                    <h3 className="team" style={marginFix}>We are a team of passionate Product Designers, Developers and Experience Designer helping businesses of all sizes launch their next projects.</h3>
                </div>
                <div className="container elementsCenter">
                    <div className="team">
                        <div className="row mb-5">
                            <div className="col-6 col-md-6 col-sm-6 members">
                                <div className="members"></div>
                            </div>
                            <div className="col-6 col-md-6 col-sm-6 members">
                                <div className="members"></div>
                            </div>
                            <div className="col-6 col-md-6 col-sm-6 mt-4 ">
                                <div className="memberDetails text-center">
                                    <h5>Shubham Modi</h5>
                                    <p>Co-Founder &<br/>Head of tech</p>
                                </div>
                            </div>
                            <div className="col-6 col-md-6 col-sm-6 mt-4 ">
                                <div className="memberDetails text-center">
                                    <h5>Sohail Mohammad</h5>
                                    <p>Co-Founder &<br />Director of Design</p>
                                </div>
                            </div>                        
                        </div>



                        <div className="row mb-5">
                            <div className="col-6 col-md-6 col-sm-6 members">
                                <div className="members"></div>
                            </div>
                            <div className="col-6 col-md-6 col-sm-6 members">
                                <div className="members"></div>
                            </div>
                            <div className="col-6 col-md-6 col-sm-6 mt-4 ">
                                <div className="memberDetails text-center">
                                    <h5>Shubham Modi</h5>
                                    <p>Co-Founder &<br />Head of tech</p>
                                </div>
                            </div>
                            <div className="col-6 col-md-6 col-sm-6 mt-4 ">
                                <div className="memberDetails text-center">
                                    <h5>Sohail Mohammad</h5>
                                    <p>Co-Founder &<br />Director of Design</p>
                                </div>
                            </div>
                        </div>


                        <div className="row mb-5">
                            <div className="col-6 col-md-6 col-sm-6 members">
                                <div className="members"></div>
                            </div>
                            <div className="col-6 col-md-6 col-sm-6 members">
                                <div className="members"></div>
                            </div>
                            <div className="col-6 col-md-6 col-sm-6 mt-4 ">
                                <div className="memberDetails text-center">
                                    <h5>Shubham Modi</h5>
                                    <p>Co-Founder &<br />Head of tech</p>
                                </div>
                            </div>
                            <div className="col-6 col-md-6 col-sm-6 mt-4 ">
                                <div className="memberDetails text-center">
                                    <h5>Sohail Mohammad</h5>
                                    <p>Co-Founder &<br />Director of Design</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container elementsCenter">
                    <div className="team">
                        <div className="row">
                            <div className="col-md-5 col-sm-12">
                                <div className="sticky-top">
                                    <Fade duration={3000}><h1>Our Culture,<br/> Our Values &<br/> Our Beliefs</h1></Fade>
                                </div>
                            </div>
                            <div className="col-md-7 col-sm-12 values">
                                <Fade duration={3000}><h2>Fun</h2></Fade>
                                <Fade duration={3000} delay={500}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis nibh gravida, gravida nisl ac, imperdiet sem. </p></Fade>
                                <Fade duration={3000}><h2>Work</h2></Fade>
                                <Fade duration={3000} delay={500}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis nibh gravida, gravida nisl ac, imperdiet sem. </p></Fade>
                                <Fade duration={3000}><h2>Relations</h2></Fade>
                                <Fade duration={3000} delay={500}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis nibh gravida, gravida nisl ac, imperdiet sem. </p></Fade>
                                <Fade duration={3000}><h2>Progress</h2></Fade>
                                <Fade duration={3000} delay={500}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis nibh gravida, gravida nisl ac, imperdiet sem. </p></Fade>
                                <Fade duration={3000}><h2>Experience</h2></Fade>
                                <Fade duration={3000} delay={500}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis nibh gravida, gravida nisl ac, imperdiet sem. </p></Fade>        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Details;
