import React from "react";
import Resume from '../Resume';

function About() {
    return (
        <div className="about">
            <div className="row about-me">
                <div className="about-title col-12">
                    <h2>About Me</h2>
                    <img className="avatar" src={require('../../assets/images/profile-picture.png')} alt='Alex Vazquez Profile' />
                </div>
                <div className="info col-12">
                    <div>
                        <p>
                            Full-stack web developer striving to maximize the user experience on the web.
                            With a certificate in Full Stack Web Development from Columbia University and proficiency in JavaScript, CSS3, Node.js, React.js, web programming frameworks, and responsive web design.
                            Recognized as an ingenious problem solver, an adaptable and devoted developer whose priority is its audience user experience.
                            With a natural curiosity, I seek to continuously learn new techniques and tools to develop an efficacious user experience.
                            Recently with a priority on mobile-first design, a team of five, including me, effectively developed a single-page MERN app utilizing an impactful UX and UI design.
                            A weblog where book enthusiasts can share their thoughts concerning a book they have read and keep track of books they plan to read or have already read.
                            I'm eager to leverage my skills as part of a fast-paced, quality-driven team to produce a more enjoyable user experience on the web.
                        </p>
                    </div>
                </div>
            </div>
            < Resume />
        </div>
    );

}

export default About;