import React, { Component } from 'react'
import './FooterBottom.css';
import { Link } from 'gatsby';

// icons
import { FaFacebookF, FaInstagram, FaBehance, FaDribbble } from 'react-icons/fa';

class FooterBottom extends Component {
    render() {
        return (
            <div className="footerBottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h5>Crafting Excellence
                            <br />Building Relationshis.</h5>
                        </div>
                        <div className="col-md-6">
                            <h4>Get in touch</h4>
                            <h5><a href="mailto:shubhammodi04@gmail.com">Hello@blckstudio.com</a>
                                <br /><a href="tel:+91-702-0917-802">(+91)7020917802.</a></h5>
                        </div>
                    </div>

                    {/* bottom */}
                    <div className="row footerEnd">
                        <div className="col-md-6 socialMediaFooter">
                            <a href="https://instagram.com/blck_studios?igshid=gx937dl4jd32"><FaInstagram color='white' size='20' /></a>
                            <a href="https://www.behance.net/sohail_0707"><FaBehance color='white' size='20' /></a>
                            <a href="https://dribbble.com/sohail_minimalist"><FaDribbble color='white' size='20' /></a>
                        </div>
                        <div className="col-md-6 footerMap">
                            <h4>Explore</h4>
                            <div className="NavLinksFooter">
                                <Link to="/services"><p>SERVICES</p></Link>
                                <Link to="/about"><p>ABOUT</p></Link>
                                <Link to="/work"><p>WORK</p></Link>
                                <Link to="/contact"><p>CONTACT</p></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default FooterBottom;