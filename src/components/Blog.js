import React, {Component} from 'react';



import bootstrap from '../img/bootstrap.svg';

class Blog extends Component {
    render() {
        return (
            <div className="container blog u-margin-top-lg">
                <div className="row blog__heading--primary justify-content-center u-margin-bot-sm">
                    <h2 className="heading-secondary"> Blog Posts </h2>
                </div>
                <div className="row blog__heading--secondary justify-content-center u-margin-bot-md">
                    <h3 className="heading-tertiary"> I post on Medium, but you can click any of the pictures below to read the full article </h3>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="blog__post">
                            <h4 className="heading-quaternary">Why I wish no one had told me about Bootstrap</h4>
                            <a className="blog__link" href="https://medium.com/@bsutt123/why-i-wish-no-one-had-told-me-about-bootstrap-be9429178568">
                                <img className="blog__img" src={bootstrap} alt="bootstrap" />
                            </a>
                        </div>
                    </div>      
                </div>
            </div>
        )
    }
}

export default Blog;