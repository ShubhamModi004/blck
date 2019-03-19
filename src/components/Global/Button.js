import React, { Component } from 'react'
import './Button.css';
import { Link } from 'gatsby';

class Button extends Component {
    render() {
        const { title, link } = this.props;
        return (
            <div className="button">
                <p><Link to={link}>{title}</Link></p>
            </div>
        )
    }
}


export default Button;