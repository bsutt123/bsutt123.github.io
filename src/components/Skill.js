import React, {Component} from 'react';


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
    render () {
        return (
            <div className="col-lg-4 col-sm-6">
                <div className="skill" onClick={this.props.handleClick}>
                        <img src={this.props.image} 
                        alt="skill__img" 
                        className={"skill__img skill__img--"+ this.skillClassName()}/>
                        <div className={"skill__caption skill__caption--"+this.skillClassName()} >
                            <div className="skill__content"> 
                                <h4 className="heading-quaternary">Skill Level: {this.props.level}</h4>
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