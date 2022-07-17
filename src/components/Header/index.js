import React from "react";
import Navigation from "../Navigation";

function Header() {
    return (
        <div>
            <Navigation />
            <div className="title hero row">
                <h1 className="col-12 col-md-4">Alex Vazquez Portfolio</h1>
            </div>
        </div>
    );

}

export default Header;