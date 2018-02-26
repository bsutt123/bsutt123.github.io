import React, {Component} from 'react';

import Project from './Project';
import FeaturedProject from './FeaturedProject';
import styles from 'Styles/modules/projects.module.css'

import projectsData from '../jsons/projects.json';

import chatty from '../img/chatty.png';
import blocipedia from '../img/crust.png';
import enfPortal from '../img/enf-portal.png';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            featuredProject: null,
            featuredProjectImage: chatty,
            featuredProjectData: projectsData.chatty,
        }
    }

    convertToImage(text) {
        switch (text) {
            case "chatty": return chatty;
            case "blocipedia": return blocipedia;
            case "enfPortal": return enfPortal;
            default: return null;
        }
    }
    updateFeatured(key) {
        const featuredImage = this.convertToImage(key);
        if (this.state.featuredProject === key) {
            this.setState({ featuredProject: null });
        } else {
            this.setState({
                featuredProject: key,
                featuredProjectImage: featuredImage,
                featuredProjectData: projectsData[key]
            });
        }
    }

    removeFeatured() {
        console.log("I'm in remove featured")
        this.setState({featuredProject: null});
    }
    addClassName(key) {
        if (this.state.featuredProject === null) {
            return "show";
        } else {
            return "hide";
        }
    }

    addFeaturedClassName() {
        if (this.state.featuredProject !== null) {
            return "show";
        } else {
            return "hide";
        }
    }
    render() {
        return (
            <div className="container u-margin-top-md">
                <div className="row justify-content-center u-margin-bot-sm"> 
                    <h1 className={styles.headingPrimary}> Completed Projects </h1>
                </div>
                <div className="row justify-content-center u-margin-bot-md">
                    <h3 className={styles.headingSecondary}> Click  on a project to learn more </h3>
                </div>
                <div className="row u-position-relative">
                    <div 
                    className={"project__featured project__featured--"+this.addFeaturedClassName()}>
                        <FeaturedProject unsetFeatured={this.removeFeatured.bind(this)} image={this.state.featuredProjectImage} data={this.state.featuredProjectData} />
                    </div>
                    {
                        Object.entries(projectsData).map(([key,value], index)=> {
                            return (
                                <div key={index} className="col-md-4 u-margin-bot-md u-position-static">
                                    <div onClick={this.updateFeatured.bind(this,key)} className={"project project--"+this.addClassName(key)} >
                                        <Project 
                                            key={index} 
                                            image={this.convertToImage(key)} 
                                            heading={value.heading} 
                                        />
                                    </div>
                                </div>

 
                            )
                        })

                    }
                </div>
            </div>
        )
    }
}

export default Projects;