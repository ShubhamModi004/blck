import React, { Component } from 'react'
import "./Header.css"
import Fade from 'react-reveal/Fade';

import { Link } from "gatsby"

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="Logo">
                    <h3>Logo</h3>
                </div>
                <div className="NavLinks">
                    <Link to="/services"><Fade left><p>SERVICES</p></Fade></Link>
                    <Link to="/about"><Fade left><p>ABOUT</p></Fade></Link>
                    <Link to="/"><Fade left><p>WORK</p></Fade></Link>
                    <Link to="/"><Fade left><p>CONTACT</p></Fade></Link>
                </div>
            </div>
        )
    }
}

export default Header