import React, { Component } from 'react'
import './Services.css'
import Fade from 'react-reveal/Fade'
import { Link } from 'gatsby'



import Image from './Image'

// icons
import { FaAngleRight } from 'react-icons/fa';

class Services extends Component {
    state = {
        websiteSelected : false,
        appSelected: false,
        bradingSelected: false,
        uiuxSelected: false,
    }

    componentDidMount = () => {
        this.setState({
            websiteSelected: true
        })
    }

    websites = () => {
        this.setState({
            websiteSelected: true,
            appSelected: false,
            bradingSelected: false,
            uiuxSelected: false,
        })
    }

    apps = () => {
        this.setState({
            websiteSelected: false,
            appSelected: true,
            bradingSelected: false,
            uiuxSelected: false,
        })
    }

    branding = () => {
        this.setState({
            websiteSelected: false,
            appSelected: false,
            bradingSelected: true,
            uiuxSelected: false,
        })
    }

    uiux = () => {
        this.setState({
            websiteSelected: false,
            appSelected: false,
            bradingSelected: false,
            uiuxSelected: true,
        })
    }



    renderContent = () => {
        if(this.state.websiteSelected == true){
            return (
                <div>
                    <div className="websiteBackground">
                    </div>
                    <Fade><h3 className="serviceHeader">Websites</h3></Fade>
                    <Fade><p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis nibh gravida, gravida nisl ac, imperdiet sem.</p></Fade>
                    <Fade><Link to="/services" className="serviceLink">CONTACT US FOR A WEBSITE <FaAngleRight className="serviceArrow" color="#8D8D8D" size='20' /></Link></Fade>
                </div>
            )
        } else if (this.state.appSelected == true){
            return (
                <div>
                    <div className="websiteBackground">
                    </div>
                    <Fade right delay={1000}><h3 className="serviceHeader">Apps</h3></Fade>
                    <Fade><p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis nibh gravida, gravida nisl ac, imperdiet sem.</p></Fade>
                    <Fade><Link to="/services" className="serviceLink">CONTACT US FOR AN APP <FaAngleRight className="serviceArrow" color="#8D8D8D" size='20' /></Link></Fade>
                </div>
            )
        } else if (this.state.bradingSelected == true) {
            return (
                <div>
                    <div className="websiteBackground">
                    </div>
                    <Fade><h3 className="serviceHeader">BRANDING</h3></Fade>
                    <Fade><p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis nibh gravida, gravida nisl ac, imperdiet sem.</p></Fade>
                    <Fade><Link to="/services" className="serviceLink">CONTACT US FOR A BRANDING <FaAngleRight className="serviceArrow" color="#8D8D8D" size='20' /></Link></Fade>
                </div>
            )
        } else {
            return (
                <div>
                    <div className="websiteBackground">
                    </div>
                    <Fade><h3 className="serviceHeader">UI/UX DESIGNING</h3></Fade>
                    <Fade><p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis nibh gravida, gravida nisl ac, imperdiet sem.</p></Fade>
                    <Fade><Link to="/services" className="serviceLink">CONTACT US FOR A UI/UX DESIGNING <FaAngleRight className="serviceArrow" color="#8D8D8D" size='20' /></Link></Fade>
                </div>
            )
        }
    }


    render() {
        const selected = {
            color: '#000',
        }

        const selectedBackground = {
            display: 'block'
        }

        const { websiteSelected, appSelected, bradingSelected, uiuxSelected } = this.state;
        return (
            <div className="homeAbout">
                <div className="serviceImage">
                    <div className="hideOverflow">
                        <Fade right delay={700}>
                            <Image/>
                        </Fade>
                    </div>
                </div>
                <div className="servicesDetail" style={{ margin: 0}}> 
                    <h1 className="serviceHeading">Our range of services</h1>
                    <div className="row sticky-top" style={{ marginLeft: 'auto' }}>
                        <div className="col-md-5 col-5 col-sm-5" style={{ paddingLeft: '0' }}>
                            <h3 className="serviceEach" style={ websiteSelected ? selected : null } onClick={this.websites}>
                                Websites
                            </h3>
                            <Fade left><div className="selectedBackground" style={websiteSelected ? selectedBackground : null}/></Fade>
                            <h3 className="serviceEach" style={ appSelected ? selected : null} onClick={this.apps}>
                                Mobile Apps
                            </h3>
                            <Fade left><div className="selectedBackground" style={ appSelected ? selectedBackground : null}/></Fade>
                            <h3 className="serviceEach" style={ bradingSelected ? selected : null} onClick={this.branding}>
                                Branding 
                            </h3>
                            <Fade left><div className="selectedBackground" style={ bradingSelected ? selectedBackground : null}/></Fade>
                            <h3 className="serviceEach" style={ uiuxSelected ? selected : null} onClick={this.uiux}>
                                UI/UX Designing
                            </h3>
                            <Fade left><div className="selectedBackground" style={ uiuxSelected ? selectedBackground : null}/></Fade>
                        </div>
                        <div className="col-md-7 col-7 col-sm-7" style={{ padding: 0 }}>
                            {this.renderContent()}
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Services;
