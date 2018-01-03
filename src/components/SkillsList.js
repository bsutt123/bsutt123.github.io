import React, {Component} from 'react';
import Skill from './Skill';

import skillsData from '../jsons/skills.json';

import javascript from '../img/javascript.svg';
import html from '../img/html.svg';
import css from '../img/css.svg';
import angular from '../img/angular.svg';
import react from '../img/react.svg';
import ruby from '../img/ruby.svg';
import rails from '../img/rails.svg';
import sql from '../img/postgresql.svg';
import bootstrap from '../img/bootstrap.svg';

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
            <div className="container u-padding-top-lg">
                <div className="row justify-content-center u-margin-bot-sm">
                    <h2 className="heading-secondary"> Developed Skills  </h2>
                </div>
                <div className="row justify-content-center u-margin-bot-md">
                    <h3 className="heading-tertiary"> Click on a Icon to read more about it </h3>
                </div>
                
                <div className="row">
                    {
                        Object.entries(skillsData).map(([key, value],index) => {
                            return (<Skill 
                                        key={index} 
                                        content={value.content}
                                        level={value.level} 
                                        name={key} 
                                        image={this.convertToImage(key)}
                                        clicked={this.elementIsClicked(key)}
                                        handleClick={this.changeElement.bind(this, key)}
                                    />
                                )
                        })
                    }
                </div>
            </div>
            
        )
    }
}

export default SkillsList;