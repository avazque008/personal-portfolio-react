import React, { useState } from "react";

function Projects() {

    const [projects] = useState([
        {
            name: 'Book and a Coffee',
            image: require('../../assets/images/bookandacoffee.png'),
            github: 'https://github.com/avazque008/bookandacoffee',
            deploy: 'https://www.bookandacoffee.com/',
            description: 'Book and a Coffee is a single-page MERN weblog where book enthusiasts can share their thoughts concerning a book they have read and keep track of books they plan to read or have already read.',
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
            name: 'Run Buddy',
            image: require('../../assets/images/run-buddy.PNG'),
            github: 'https://github.com/avazque008/run-buddy',
            deploy: 'https://avazque008.github.io/run-buddy/',
            description: 'Run Buddy is a static website that lets runners sign up for personal training.',
            id: 3
        },
        {
            name: 'Tech Blog',
            image: require('../../assets/images/tech-blog.PNG'),
            github: 'https://github.com/avazque008/technology-blog',
            deploy: 'https://av-tech-blog.herokuapp.com/',
            description: "Tech Blog is a full-stack web application, a CMS-style blog where developers can publish their blog posts and comment on other developers' posts.",
            id: 4
        },
        {
            name: 'Password Generator',
            image: require('../../assets/images/password-generator.PNG'),
            github: 'https://github.com/avazque008/random-password-generator',
            deploy: 'https://avazque008.github.io/random-password-generator/',
            description: 'Password Generator is a web application that generates random passwords based on criteria. Users can choose how many characters their password should have and what type of characters they want to include in their password. Users can decide on their password to include lowercase, uppercase, numbers, or special characters. By default, the password will be at least eight characters and no more than one hundred twenty-eight characters long.',
            id: 5
        },
        {
            name: 'Work Day Scheduler',
            image: require('../../assets/images/work-day-scheduler.PNG'),
            github: 'https://github.com/avazque008/work-day-scheduler',
            deploy: 'https://avazque008.github.io/work-day-scheduler/',
            description: 'Work Day Schedule is simple calendar application that allows a user to save events for each hour of the day.',
            id: 6
        },
        {
            name: 'My Lifestyle',
            image: require('../../assets/images/my-lifestyle.PNG'),
            github: 'https://github.com/avazque008/my-lifestyle',
            deploy: 'https://avazque008.github.io/my-lifestyle/welcome.html',
            description: "My Lifestyle is a dynamic front-end website that helps a user's keep track of their way of life, from helping them plan for the day to broadcasting the weather.",
            id: 7
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