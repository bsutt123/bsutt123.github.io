import React, { Component } from "react";

import styles from 'Styles/modules/blog.module.css'
import bootstrap from "../img/bootstrap.svg";
import enzaTeam from '../img/enza_team.jpg';
import wsl from '../img/wsl.jpg'
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
              href="https://medium.com/@bsutt123/hacking-with-high-schoolers-21ffd1d6ec01"
            >
              <img className="blog__img" src={enzaTeam} alt="photo of high schoolers from enza academy" />
            </a>
          </div>
          <div className="blog__post">
            <h4 className="u-margin-bot-tiny">
              How to get Windows Subsystem for Linux Set Up Just Right
            </h4>
            <a
              className="blog__link"
              href="https://medium.com/@bsutt123/how-to-setup-the-windows-subsystem-for-linux-juuuuuuust-right-fe83cb31be93"
            >
              <img className="blog__img" src={wsl} alt="Juuust right meme with ubuntu and windows" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
