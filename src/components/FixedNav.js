import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import FaClose from 'react-icons/lib/fa/close';
import FaBars from 'react-icons/lib/fa/bars';
import resume from '../assets/bradySuttonResume.pdf';

class FixedNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
    }

    addClicked() {
        if (this.state.clicked) {
            return "clicked";
        } else {
            return "not-clicked";
        }
    }

    handleClick() {
        this.setState({clicked: !this.state.clicked});
    }
    render() {
        return (
            <div className="nav-box">
                <div className="fixed-nav">
                    <div 
                    onClick={this.handleClick.bind(this)} 
                    className={"fixed-nav__side fixed-nav__side--front--"+this.addClicked()}> 
                        <FaBars className="fixed-nav__icon"/>
                    </div>
                    <div 
                    onClick={this.handleClick.bind(this)} 
                    className={"fixed-nav__side fixed-nav__side--back--"+this.addClicked()}> 
                        <FaClose className="fixed-nav__icon"/> 
                    </div>
                    <div 
                    className={"fixed-nav__background fixed-nav__background--"+this.addClicked()}>

                    </div>
                </div>
                <nav className={"nav-list nav-list--"+this.addClicked()}>
                    <ul>
                        <li onClick={this.handleClick.bind(this)} ><Link className="btn btn--white" to="/"> Main Page </Link></li>
                        <li onClick={this.handleClick.bind(this)} ><Link className="btn btn--white" to="/about-me"> About Me</Link></li>
                        <li onClick={this.handleClick.bind(this)} ><Link className="btn btn--white" to="/skills"> Skills </Link></li>
                        <li onClick={this.handleClick.bind(this)} ><Link className="btn btn--white" to="/projects"> Projects </Link></li>
                        <li onClick={this.handleClick.bind(this)} ><Link className="btn btn--white" to="/blog"> Blog </Link></li>
                        <li> <a className="btn btn--white" href={resume} download="Brady_Sutton_Resume"> Download Resume </a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default FixedNav;