import React from "react";

function Navigation({categorySelected, setCategorySelected }) {
    return (
        <div className="header container-fluid">
            <ul className="row nav">
                <li className="col-6 col-md-4 section">
                    <span className={`${categorySelected === 'me' ? 'category-selected left' : 'category'}`} onClick={() => setCategorySelected('me')}>About Me</span>
                </li>
                <li className="col-6 col-md-4 section">
                    <span className={`${categorySelected === 'portfolio' ? 'category-selected' : 'category'}`} onClick={() => setCategorySelected('portfolio')}>Projects</span>
                </li>
                <li className="col-12 col-md-4 section">
                    <span className={`${categorySelected === 'contact' ? 'category-selected' : 'category'}`} onClick={() => setCategorySelected('contact')}>Contact Me</span>
                </li>
            </ul>
        </div>
    );

}

export default Navigation;