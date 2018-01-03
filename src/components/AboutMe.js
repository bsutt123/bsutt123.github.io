import React, {Component} from 'react';


import Story from './Story';

import chipotle from '../img/chipotle.png';
import spacex from '../img/spacex.jpg';
import spacex2 from '../img/spacex_2.jpg';
import hmc from '../img/hmc.jpg';
import enc from '../img/enf-1.jpg';

class AboutMe extends Component {

    heading() {
        return "I Love Nature!";
    }

    harveyMudd() {
       return "I went to college at Harvey Mudd, a small STEM school that only has about 800 students. I majored in engineering, but I got a very broad education that included everything from Intro to Computer Science to Advanced Microprocessor Design and Implemenation. I decided to spend more time learning about mechanical engineering, and I particularly loved Strucutual Dynamics. Harvey Mudd helped me build a great technical foundational knowledge, and lot of skills that you learn in engineering can be applied to any field. Creative problem solving and learning to take a step back and work carefull through an issue is a useful skill to have regardless of occupation, and is particularly suited to web development.";
    }
    eaglesNest() {
        return "I spent my summers during college and even for a few years after working at Eagles Nest Camp as a camp counselor and a Canoeing Director. I got a lot of hands on experience solving problems, and I got to work as a member of a team that had to interact and work together closely every day for three months. The teamwork and leadership I learned at Eagles Nest is I think what sets me apart from the average applicants. Many people have technical knowledge but are unable to work seemlessly with others, and Web Development has become a field built around collaborative programming.";
    }

    spaceX() {
        return "In June of 2014, I got the chance to work at Space Exploration Technologies (SpaceX) as a dynamics engineering contract to hire. I would work there for three months and then we would both decide if we thought that it was a good fit. I really enjoyed the work, performing Couple Load Analyses on payloads and insuring that the Dynamic Environment of the rocket was safe during flight. Unforanately, I was also an entire country apart from my wife and family, and I decided that the distance just was not tenable. I decided that even though the work was exicting and interesting, I couldn't say for the years to come."
    }
    chipotle() {
        return "After college, I could not find a engineering position that I felt I could be happy at. I started working a Chipotle because I had always loved to cook and fell in love with the work I did there. While it wasn't exactly what I had studied in college, it was an awesome work and I learned a lot about cooking and managing people. In my 2 years at Chipotle, I worked my way from a regular crew member to the General Manager of a restaurant. I got tons of experience doing valuable management skills like interviewing, training, and even working with crew members who were becoming a detriment to the team to either move them out the door, or improve their peformance. It was an incredible experience, and getting to learn how to be the best manager and inspire others to do better work because of my attitude is something I will always use in my professional career.";
    }
    render() {
        return (
            <div className="about-me container u-margin-top-lg">
                <div className="row justify-content-center u-margin-bot-lg">
                    <h2 className="heading-secondary"> Not your average developer </h2>
                </div>
                <Story height={true} image={hmc} heading={"Harvey Mudd College"} textContent={this.harveyMudd()} />
                <Story height={true} image={enc} heading={"Ealges Nest Camp"} textContent={this.eaglesNest()} />
                <Story height={true} image={spacex} heading={"SpaceX"} textContent={this.spaceX()} />
                <Story height={true} image={chipotle} heading={"Chipotle"} textContent={this.chipotle()} />/>
            </div>
        )
    }
}


export default AboutMe;
