import React, { Component } from "react";
import styles from 'Styles/modules/featured-project.module.css';

import FaArrowCircleLeft from "react-icons/lib/fa/arrow-circle-left";

class FeaturedProject extends Component {
  render() {
    return (
      <div className="project u-margin-bot-lg">
        <FaArrowCircleLeft
          onClick={this.props.unsetFeatured}
          className="project__back"
        />
        <h3 className={styles.heading}>
          {this.props.data.heading}
        </h3>
        <div className="project__content">
          <img
            src={this.props.image}
            alt="a table"
            className="project__img u-margin-bot-md"
          />
          <h3 className={styles.heading}> Description </h3>
          <ul className="project__list">
            {this.props.data.description.map((text, index) => (
              <li key={index} className="project__list--item">
                {text}
              </li>
            ))}
          </ul>
          <h3 className={styles.heading}> Motivation </h3>
          <ul className="project__list">
            {this.props.data.motivation.map((text, index) => (
              <li key={index} className="project__list--item">
                {text}
              </li>
            ))}
          </ul>
          <h3 className={styles.heading}> Github Links </h3>
          <ul className="project__github">
            {this.props.data.github.map((linkData, index) => (
              <li key={index} className="project__github--item">
                <a
                  className="btn btn--white"
                  href={linkData.link}
                  target="_blank"
                >
                  {linkData.title}
                </a>
              </li>
            ))}
          </ul>
          <h3 className={styles.heading}> Deployed Site </h3>
          <a
            className="btn btn--white"
            href={this.props.data.deployed.link}
            target="_blank"
          >
            {this.props.data.deployed.title}
          </a>
        </div>
      </div>
    );
  }
}

export default FeaturedProject;
