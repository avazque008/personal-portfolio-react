import React, { useState } from "react";

function Projects() {

    const [projects] = useState([
        {
            name: 'Run Buddy',
            image: require('../../assets/images/run-buddy.PNG'),
            github: 'https://github.com/avazque008/run-buddy',
            deploy: 'https://avazque008.github.io/run-buddy/'
        },
        {
            name: 'Yakety',
            image: require('../../assets/images/yakety.png'),
            github: 'https://github.com/avazque008/yakety',
            deploy: 'https://yakety-chat.herokuapp.com/'
        },
        {
            name: 'My Lifestyle',
            image: require('../../assets/images/my-lifestyle.PNG'),
            github: 'https://github.com/avazque008/my-lifestyle',
            deploy: 'https://avazque008.github.io/my-lifestyle/welcome.html'
        },
        {
            name: 'Password Generator',
            image: require('../../assets/images/password-generator.PNG'),
            github: 'https://github.com/avazque008/random-password-generator',
            deploy: 'https://avazque008.github.io/random-password-generator/'
        },
        {
            name: 'Tech Blog',
            image: require('../../assets/images/tech-blog.PNG'),
            github: 'https://github.com/avazque008/technology-blog',
            deploy: 'https://av-tech-blog.herokuapp.com/'
        },
        {
            name: 'Work Day Scheduler',
            image: require('../../assets/images/work-day-scheduler.PNG'),
            github: 'https://github.com/avazque008/work-day-scheduler',
            deploy: 'https://avazque008.github.io/work-day-scheduler/'
        },

    ]);

    return (
        <div className="container projects">
            <div className="row project-info">
                {projects.map((project) => (
                    <div className="col-12 col-md-6 project">
                        <h3 className="project-name">
                            {project.name}
                            <a href={project.github} target="_blank" >
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </h3>
                        <a href={project.deploy} target="_blank">
                            <img className='project-img' src={project.image} alt={`An image of a deployed web application titled ${project.name}.`} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )

};

export default Projects;