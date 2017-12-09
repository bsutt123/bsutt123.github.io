import React, {Component} from 'react';
import Skill from './Skill';

import skillsData from '../jsons/skills.json';

import javascript from '../img/js.png';
import html from '../img/html.png';
import css from '../img/css.png';
import angularJS from '../img/angular-js.png';
import angular from '../img/angular.png';
import react from '../img/react-clipped.png';
import ruby from '../img/ruby.png';
import rails from '../img/rails.png';
import sql from '../img/sql.png';
import bootstrap from '../img/bootstrap.png';

class SkillsList extends Component {pm
    constructor(props) {
        super(props);
        this.state = {
            clickedElement: null
        }
    }

    convertToImage(text) {
        switch (text) {
            case "javascript": return javascript;
            case "html": return html;
            case "css": return css;
            case "angularJS": return angularJS;
            case "angular": return angular;
            case "react": return react;
            case "ruby": return ruby;
            case "rails": return rails;
            case "sql": return sql;
            case "bootstrap": return bootstrap;
            default: return null;
        }
    }

    elementIsClicked(element) {
        return this.state.clickedElement === element

    }

    changeElement(element) {
        if (this.state.clickedElement === element) {
            this.setState({clickedElement: null});
        } else {
            this.setState({clickedElement: element});
        }
        
    }

    render() {
        return (
            <div className="skewer u-padding-top-lg">
                <div className="container">
                    <div className="row justify-content-center u-margin-bot-sm">
                        <h2 className="heading-secondary u-color-white"> Developed Skills  </h2>
                    </div>
                    <div className="row justify-content-center u-margin-bot-md">
                        <h3 className="heading-tertiary u-color-white"> Click on a Icon to read more about it </h3>
                    </div>
                    
                    <div className="row">
                        {
                            Object.entries(skillsData).map((keyValue,index) => {
                                return (<Skill 
                                            key={index} 
                                            content={keyValue[1]} 
                                            name={keyValue[0]} 
                                            image={this.convertToImage(keyValue[0])}
                                            clicked={this.elementIsClicked(keyValue[0])}
                                            handleClick={this.changeElement.bind(this, keyValue[0])}
                                        />
                                    )
                            })
                        }
                    </div>
                </div>
            </div>
            
        )
    }
}

export default SkillsList;