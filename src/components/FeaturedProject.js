import React, {Component} from 'react';

import FaArrowCircleLeft from 'react-icons/lib/fa/arrow-circle-left';

class FeaturedProject extends Component {
    render() {
        return (
        <div className="project">
            <FaArrowCircleLeft onClick={this.props.unsetFeatured} className="project__back" />
            <h3 className="heading-tertiary u-margin-bot-sm"> {this.props.data.heading} </h3>
            <div className="project__content">
                <img src={this.props.image} alt="a table" className="project__img u-margin-bot-md" />
                <h3 className="heading-tertiary u-margin-bot-sm"> Description </h3>
                <ul className="project__list">
                {
                    this.props.data.description.map((text, index) =>
                        (<li key={index} className="project__list--item"> {text} </li>) 
                    )
                }
                </ul>
                <h3 className="heading-tertiary u-margin-bot-sm"> Motivation </h3>
                <ul className="project__list">
                {
                    this.props.data.motivation.map((text, index) =>
                        (<li key={index} className="project__list--item"> {text} </li>) 
                    )
                }
                </ul>
                <h3 className="heading-tertiary u-margin-bot-sm"> Motivation </h3>
            </div>
        </div>
        )
    }
}

export default FeaturedProject;