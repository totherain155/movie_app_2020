import React from "react";
import { Link } from "react-router-dom";

function Navigtaion() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    )
}


export default Navigtaion;