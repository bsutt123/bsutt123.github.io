import React, { Component } from "react";

import styles from 'Styles/modules/blog.module.css'
import bootstrap from "../img/bootstrap.svg";
import enzaTeam from '../img/enza_team.jpg';

class Blog extends Component {
  render() {
    return (
      <div className="container blog u-margin-top-sm">
        <div className="row blog__heading--primary justify-content-center u-margin-bot-sm">
          <h1 className="heading-secondary"> Blog Posts </h1>
        </div>
        <div className="row blog__heading--secondary justify-content-center u-margin-bot-md">
          <h3 className="heading-tertiary">
            I post on Medium, but you can click any of the pictures below to
            read the full article
          </h3>
        </div>
        <div className={styles.gridList}>
          <div    href="https://medium.com/@bsutt123/hacking-with-high-schoolers-21ffd1d6ec01"
            className="blog__post">
            <h4 className="u-margin-bot-tiny">
              Why I wish no one had told me about Bootstrap
            </h4>
            <a
              className="blog__link"
              href="https://medium.com/@bsutt123/why-i-wish-no-one-had-told-me-about-bootstrap-be9429178568"
            >
              <img className="blog__img" src={bootstrap} alt="bootstrap" />
            </a>
          </div>
          <div className="blog__post">
            <h4 className="u-margin-bot-tiny">
              Hacking with High Schoolers
            </h4>
            <a
              className="blog__link"
            >
              <img className="blog__img" src={enzaTeam} alt="bootstrap" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
