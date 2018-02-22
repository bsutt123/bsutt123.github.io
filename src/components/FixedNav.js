import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import styles from 'Styles/modules/fixed-nav.module.css';

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
    frontCardTransform() {
        if (this.state.clicked) {
            return {
                transform: "rotateY(-180deg)"
            }
        } else {return {}}
    }

    backCardTransform() {
        if (this.state.clicked) {
            return {
                transform: "rotateY(-360deg)"
            }
        } else {
            return {
                transform: "rotateY(-180deg)"
            }
        }
    }

    backgroundStyles() {
        return (this.state.clicked) ? {transform: "scale(100)"} : {}
    }
    
    listStyles() {
        if (this.state.clicked) {
            return {
                transform: "translate(-50%,-50%) scale(1)",
                opacity: "1",
                left: "50%",
                top: "50vh"
            }
        } else {
            return {
                transform: "scale(.01)",
                opacity: "0",
                left:"0",
                top:"0"
            }
        }
    }

    handleClick() {
        this.setState({clicked: !this.state.clicked});
    }
    render() {
        return (
            <div className={styles.container} >
                <div className={styles.fixedNav} >
                    <div 
                    onClick={this.handleClick.bind(this)} 
                    style={this.frontCardTransform()}
                    className={styles.fixedNavSide} > 
                        <FaBars className={styles.icon}/>
                    </div>
                    <div 
                    onClick={this.handleClick.bind(this)}
                    style={this.backCardTransform()} 
                    className={styles.fixedNavSide} > 
                        <FaClose className={styles.icon}/> 
                    </div>
                    <div className={styles.background} style={this.backgroundStyles()}> </div>
                </div>
                <nav className={styles.navList} style={this.listStyles()}>
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