import React, {Component} from 'react';





class FixedNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
    }

    addClicked() {
        if (this.state.clicked) {
            return "clicked";
        } else {
            return "not-clicked";
        }
    }

    handleClick() {
        this.setState({clicked: !this.state.clicked});
    }
    render() {
        return (
            <div className="nav-box">
                <div className="fixed-nav">
                    <div 
                    onClick={this.handleClick.bind(this)} 
                    className={"fixed-nav__side fixed-nav__side--front--"+this.addClicked()}> 
                    </div>
                    <div 
                    onClick={this.handleClick.bind(this)} 
                    className={"fixed-nav__side fixed-nav__side--back--"+this.addClicked()}> 
                    </div>
                    <div 
                    className={"fixed-nav__background fixed-nav__background--"+this.addClicked()}>

                    </div>
                </div>
                <nav className={"nav-list nav-list--"+this.addClicked()}>
                    <ul>
                        <li><a className="btn btn--white"> I'm a list item! </a></li>
                        <li><a className="btn btn--white"> I'm a list item! </a></li>
                        <li><a className="btn btn--white"> I'm a list item! </a></li>
                        <li><a className="btn btn--white"> I'm a list item! </a></li>
                        <li><a className="btn btn--white"> I'm a list item! </a></li>
                    </ul>
                
                </nav>
            </div>
        )
    }
}

export default FixedNav;