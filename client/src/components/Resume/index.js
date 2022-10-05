import React, { useState } from "react";

function Resume() {

    const [frontProficiencies] = useState(['HTML', 'Advanced CSS', 'JavaScript', 'JQuery', 'Responsive Web Design', "Web API's", 'Server-Side APIs', 'Third-Party APIs']);
    const [backProficiencies] = useState(['Node.js', 'Object-Oriented Programming (OOP)', 'Express.js', 'SQL', 'Object-Relational Mapping (ORM)', 'NoSQL', 'Progressive Web Applications (PWA)', 'React.js', 'MERN'])

    return (
        <div className="resume-container">
            <div className="row resume">
                <div className="col-12 resume-title">
                    <h2>Skills</h2>
                </div>
                <div className="col-12 col-md-6 skills-1">
                    <h4 style={{ textDecoration: 'underline'}}>Front-End Proficiencies</h4>
                    <ul>
                        {frontProficiencies.map((proficiency) => (
                            <li key={proficiency}>
                                {proficiency}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-12 col-md-6 skills-2">
                    <h4 style={{ textDecoration: 'underline'}}>Back-End Proficiencies</h4>
                    <ul>
                        {backProficiencies.map((proficiency) => (
                            <li key={proficiency}>
                                {proficiency}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );

};

export default Resume;