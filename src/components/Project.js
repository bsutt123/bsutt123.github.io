import React, {Component} from 'react';

class Project extends Component {
    render() {
        return (
            <div>
                <h4 className="heading-tertiary u-margin-bot-sm"> {this.props.heading} </h4>
                <div className="project__content">
                    <img src={this.props.image} alt="a table" className="project__img" />
                </div>
            </div>

        )
    }
}

export default Project;