import React, { Component } from 'react'
import './FooterBottom.css';
import {Link} from 'gatsby';

// icons
import { FaFacebookF, FaInstagram, FaBehance, FaDribbble } from 'react-icons/fa';

class FooterBottom extends Component {
    render() {
        return (
            <div className="footerBottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Logo</h2>
                            <h5>Crafting Excellence
                            <br/>Building Relationshis.</h5>
                        </div>
                        <div className="col-md-6">
                            <h4>Get in touch</h4>
                            <h5><a href="mailto:hello@blckstudio.com">Hello@blckstudio.com</a>
                            <br /><a href="tel:+91-702-0917-802">(+91)7020917802.</a></h5>
                        </div>
                    </div>

                    {/* bottom */}
                    <div className="row footerEnd">
                        <div className="col-md-6 socialMediaFooter">
                            <FaFacebookF color='white' size='20'/>
                            <FaInstagram color='white' size='20'/>
                            <FaBehance color='white' size='20'/>
                            <FaDribbble color='white' size='20'/>
                        </div>
                        <div className="col-md-6 footerMap">
                            <h4>Explore</h4>
                            <div className="NavLinksFooter">
                                <Link to="/"><p>SERVICES</p></Link>
                                <Link to="/"><p>ABOUT</p></Link>
                                <Link to="/"><p>WORK</p></Link>
                                <Link to="/"><p>CONTACT</p></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default FooterBottom;