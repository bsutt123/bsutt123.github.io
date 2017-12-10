import React, {Component} from 'react';

class FeaturedProject extends Component {
    render() {
        return (
        <div className="project">
            <h3 className="heading-tertiary u-margin-bot-sm"> {this.props.data.heading} </h3>
            <div className="project__content">
                <img src={this.props.image} alt="a table" className="project__img u-margin-bot-md" />
                <h3 className="heading-tertiary u-margin-bot-sm"> Description </h3>
                <p className="project__description u-margin-bot-md">
                    {this.props.data.description}
                </p>
                <h3 className="heading-tertiary u-margin-bot-sm"> Motivation </h3>
                <p className="project__description u-margin-bot-md">
                    {this.props.data.motivation}
                </p>
            </div>
        </div>
        )
    }
}

export default FeaturedProject;