// Node Modules
import React from "react";

// CSS
import "../styles/logo.css"

// Images
import imgLogo from "../images/postcodes Logo.png"


const Logo = () => {
    return (
    <div className="container-image">
        <img className="image-logo" src={imgLogo} alt="Logo" />
    </div>)
}

export default Logo