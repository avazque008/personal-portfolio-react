import React from "react";
import Navigation from "../Navigation";

function Header({categorySelected, setCategorySelected }) {
    return (
        <div>
            <Navigation setCategorySelected={setCategorySelected} categorySelected={categorySelected} />
            <div className="title hero row">
                <h1 className="col-12 col-md-4 author">Alex Vazquez Portfolio</h1>
            </div>
        </div>
    );

}

export default Header;