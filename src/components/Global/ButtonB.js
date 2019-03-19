import React, { Component } from 'react'
import './ButtonB.css';
import { Link } from 'gatsby';

class Button extends Component {
    render() {
        const { title, link } = this.props;
        return (
            <div className="buttonB">
                <p><Link to={link}>{title}</Link></p>
            </div>
        )
    }
}


export default Button;