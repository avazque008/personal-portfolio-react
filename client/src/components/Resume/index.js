import React, { useState } from "react";

function Resume() {

    const [frontProficiencies] = useState(['HTML', 'Advanced CSS', 'JavaScript', 'JQuery', 'Responsive Web Design', "Web API's", 'Server-Side APIs', 'Third-Party APIs']);
    const [backProficiencies] = useState(['Node.js', 'Object-Oriented Programming (OOP)', 'Express.js', 'SQL', 'Object-Relational Mapping (ORM)', 'NoSQL', 'Progressive Web Applications (PWA)', 'React.js', 'MERN'])
    
    return (
        <div className="container">
            <div className="row resume">
                <h2 className="col-12">Resume</h2>
                <h6 className="col-12"><a href={require('../../assets/resume/Resume.pdf')} download>Download Resume</a></h6>
                <div className="col-12">
                    <h4>Front-End Proficiencies</h4>
                    <ul>
                        {frontProficiencies.map((proficiency) => (
                            <li key={proficiency}>
                                {proficiency}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-12">
                    <h4>Back-End Proficiencies</h4>
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