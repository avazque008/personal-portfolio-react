import React from "react";

function Navigation({categorySelected, setCategorySelected }) {
    return (
        <div className="header container-fluid">
            <ul className="row nav">
                <li className="col-6 col-md-3 section">
                    <span className={`${categorySelected === 'me' ? 'category-selected left' : 'category'}`} onClick={() => setCategorySelected('me')}>About Me</span>
                </li>
                <li className="col-6 col-md-3 section">
                    <span className={`${categorySelected === 'portfolio' ? 'category-selected' : 'category'}`} onClick={() => setCategorySelected('portfolio')}>Portfolio</span>
                </li>
                <li className="col-6 col-md-3 section">
                    <span className={`${categorySelected === 'contact' ? 'category-selected' : 'category'}`} onClick={() => setCategorySelected('contact')}>Contact Me</span>
                </li>
                <li className="col-6 col-md-3 section">
                    <span className={`${categorySelected === 'resume' ? 'category-selected' : 'category'}`} onClick={() => setCategorySelected('resume')}>Resume</span>
                </li>
            </ul>
        </div>
    );

}

export default Navigation;