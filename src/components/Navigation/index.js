import React from "react";

function Navigation() {
    return (
        <div className="header container-fluid">
            <ul className="row nav">
                <li className="col-12 col-md-3">
                    <span className="left">About Me</span>
                </li>
                <li className="col-12 col-md-3">
                    <span className="left">Portfolio</span>
                </li>
                <li className="col-12 col-md-3">
                    <span className="right">Contact Me</span>
                </li>
                <li className="col-12 col-md-3">
                    <span className="right">Resume</span>
                </li>
            </ul>
        </div>
    );

}

export default Navigation;