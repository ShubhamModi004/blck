import React, { Component } from 'react'
import "./Header.css"
import Fade from 'react-reveal/Fade';
import Logo from './Logo';

import { Link } from "gatsby"

class Header extends Component {
    render() {
        return (
            <div className="">
                <div className="Header desktop">
                    <div className="Logo">
                        <Link to="/"><Logo /></Link>
                    </div>
                    <div className="NavLinks">
                        <Link to="/services"><Fade left><p>SERVICES</p></Fade></Link>
                        <Link to="/about"><Fade left><p>ABOUT</p></Fade></Link>
                        <Link to="/"><Fade left><p>WORK</p></Fade></Link>
                        <Link to="/"><Fade left><p>CONTACT</p></Fade></Link>
                    </div>
                </div>

                {/* header for the navigation */}
                <div className="nav mobile">
                    <input type="checkbox" id="nav-check" />
                    <div className="nav-header">
                        <div className="Logo">
                            <Link to="/"><Logo /></Link>
                        </div>
                    </div>
                    <div className="nav-btn">
                        <label for="nav-check">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>

                    <div className="nav-links">
                        <Link to="/services"><Fade left><p>SERVICES</p></Fade></Link>
                        <Link to="/about"><Fade left><p>ABOUT</p></Fade></Link>
                        <Link to="/"><Fade left><p>WORK</p></Fade></Link>
                        <Link to="/"><Fade left><p>CONTACT</p></Fade></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header