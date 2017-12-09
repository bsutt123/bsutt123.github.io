import React, {Component} from 'react';

import engineer from '../img/engineer.jpg';
import webDev from '../img/dev-typing.jpg';

class Hero extends Component {
    render() {
        return (
            <div className="hero container-fluid">
                <img className="hero__img hero__img--top" src={engineer} alt="engineering" />
                <img className="hero__img hero__img--bot" src={webDev} alt="computer" />
                <div className="hero__title">
                    <h1 className="heading-primary">Brady Sutton</h1>
                    <h3 className="heading-tertiary">
                        <span className="hero__fade hero__fade--in"> Former Mechanical engineer</span> ... 
                        <span className="hero__fade hero__fade--out"> turned software developer </span>
                    </h3>
                </div>
            </div>
        )
    }
}

export default Hero;
