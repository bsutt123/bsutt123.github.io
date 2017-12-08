import React, {Component} from 'react';

import bradyPhoto from '../img/brady-1.jpg';

class AboutMe extends Component {
    render() {
        return (
            <div className="about-me container u-margin-bot-huge">
                <div className="row justify-content-center u-margin-bot-sm">
                    <h2 className="heading-secondary"> Not your average developer </h2>
                </div>
                <div className="row story">
                    <div className="col-lg-4 col-md-5">
                        <figure className="story__shape">
                            <img className="story__img" src={bradyPhoto} alt="Brady Sutton" />
                        </figure>
                    </div>
                    <div className="col-lg-7 col-md-6">
                        <p className="story__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat vivamus at augue eget arcu dictum varius duis at. Nibh ipsum consequat nisl vel pretium lectus quam id leo. Lectus sit amet est placerat in egestas erat imperdiet. Enim blandit volutpat maecenas volutpat. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Nunc sed blandit libero volutpat sed cras ornare arcu. Eu lobortis elementum nibh tellus molestie nunc. Consectetur a erat nam at lectus. Pellentesque habitant morbi tristique senectus. Sagittis orci a scelerisque purus semper eget duis. Sit amet nulla facilisi morbi. Lacinia at quis risus sed vulputate odio. Convallis a cras semper auctor neque vitae tempus quam. Quis lectus nulla at volutpat diam ut venenatis tellus. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Vitae suscipit tellus mauris a diam maecenas sed enim. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Sed viverra ipsum nunc aliquet bibendum enim facilisis.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}


export default AboutMe;
