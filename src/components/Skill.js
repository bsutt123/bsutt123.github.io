import React, {Component} from 'react';
import styles from 'Styles/modules/skill.module.css'

class Skill extends Component {

    transitionState() {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    skillClassName() {
        if (this.props.clicked) {
            return "clicked"
        } else {
            return "not-clicked"
        }
    }

    imageStyles() {
        if (this.props.clicked) {
            return {
                transform: "scale(1.2)",
                'z-index': '5'
            }
        } else { return {} }
    }

    captionStyles() {
        if (this.props.clicked) {
            return {
                opacity: '1',
                transform: 'scale(1.2)',
                'z-index': '5'
            }
        } else {
            return {
                opacity: '0'
            }
        }
    }

    render () {
        return (
            <div className={styles.container}>
                <div className={styles.skill} onClick={this.props.handleClick}>
                        <img src={this.props.image} 
                        alt="skill Image" 
                        style={this.imageStyles()}
                        className={styles.skillImg}/>
                        <div className={styles.skillCaption} style={this.captionStyles()} >
                            <div className={styles.skillContent}> 
                                <h4 className={styles.skillHeading}>Skill Level: {this.props.level}</h4>
                                <br />
                                <p>{this.props.content} </p>
                            </div>
                        </div>
                </div>
            </div>
        )   
    }
}

export default Skill;