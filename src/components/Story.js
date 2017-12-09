import React, {Component} from 'react';

class Story extends Component {
    render() {
        return (
            <div className="row story">
                <div className="col-lg-4 col-md-5">
                    <figure className="story__shape">
                        <img className="story__img" src={this.props.image} alt="Brady Sutton" />
                    </figure>
                </div>
                <div className="col-lg-7 col-md-6">
                    <div className="row justify-content-center u-margin-bot-tiny">
                        <h3 className="heading-tertiary"> {this.props.heading} </h3>
                    </div>
                    <p className="story__text">
                        {this.props.textContent}
                    </p>
                </div>
            </div>
        )
    }
}

export default Story;