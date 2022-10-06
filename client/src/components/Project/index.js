import React, { useState } from "react";

function Projects() {

    const [projects] = useState([
        {
            name: 'Run Buddy',
            image: require('../../assets/images/run-buddy.PNG'),
            github: 'https://github.com/avazque008/run-buddy',
            deploy: 'https://avazque008.github.io/run-buddy/',
            description: '1',
            id: 1
        },
        {
            name: 'Yakety',
            image: require('../../assets/images/yakety.png'),
            github: 'https://github.com/avazque008/yakety',
            deploy: 'https://yakety-chat.herokuapp.com/',
            description: 'Yakety is a full-stack web application that allows users to engage in private, secure conversations with other registered users in real-time online chat.',
            id: 2
        },
        {
            name: 'My Lifestyle',
            image: require('../../assets/images/my-lifestyle.PNG'),
            github: 'https://github.com/avazque008/my-lifestyle',
            deploy: 'https://avazque008.github.io/my-lifestyle/welcome.html',
            description: '2',
            id: 3
        },
        {
            name: 'Password Generator',
            image: require('../../assets/images/password-generator.PNG'),
            github: 'https://github.com/avazque008/random-password-generator',
            deploy: 'https://avazque008.github.io/random-password-generator/',
            description: '3',
            id: 4
        },
        {
            name: 'Tech Blog',
            image: require('../../assets/images/tech-blog.PNG'),
            github: 'https://github.com/avazque008/technology-blog',
            deploy: 'https://av-tech-blog.herokuapp.com/',
            description: "Tech Blog is a full-stack web application, a CMS-style blog where developers can publish their blog posts and comment on other developers' posts.",
            id: 5
        },
        {
            name: 'Work Day Scheduler',
            image: require('../../assets/images/work-day-scheduler.PNG'),
            github: 'https://github.com/avazque008/work-day-scheduler',
            deploy: 'https://avazque008.github.io/work-day-scheduler/',
            description: '4',
            id: 6
        },

    ]);

    return (
        <div className="projects">
            <div className="row project-info">
                <div className=" col-12 projects-title">
                    <h2>Projects</h2>
                </div>
                {projects.map((project) => (
                    <div key={project.name} className="col-12 col-md-5 project">
                        <h3 className="project-name">
                            {project.name}
                            <a href={project.github} target="_blank" rel="noreferrer">
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </h3>
                        <a href={`#project-modal-${project.id}`} rel="noreferrer modal:open" style={{ textDecoration: 'none' }}>
                            <div className="project-img-section">
                                <img className="project-img" src={project.image} alt={`A deployed web application titled ${project.name}.`} />
                            </div>
                        </a>
                        <div id={`project-modal-${project.id}`} className="modal">
                            <p>{project.description}</p>
                            <a href={project.deploy} target="_blank" rel="noreferrer" className="project-link">Visit Website</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

};

export default Projects;