import React, {Component} from 'react';
import styles from 'Styles/modules/story.module.css';

class Story extends Component {
    setFill() {
        if (this.props.height) {
            return "--height"
        } else {
            return "--width"
        }
    }
    render() {
        return (
            <div className={styles.container}>
                <figure className="story__shape">
                    <img className={"story__img"+this.setFill()} src={this.props.image} alt="Brady Sutton" />
                </figure>
                <div>
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