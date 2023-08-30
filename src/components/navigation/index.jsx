import React from "react";
import "./style.css"

const Navigation=()=>{
    return(


        <div>
            <header class="header">
        <nav class="navbar">
        <img className="sera" src={process.env.PUBLIC_URL + '/Images/logobr.png'} alt="SeraWazi Logo" />

            <ul class="nav-menu">
            <li class="nav-item">
                    <a href="#" className="nav-link">Home</a>
                </li>

                <li class="nav-item">
                    <a href="#" className="nav-link">About Us</a>
                </li>
                <li class="nav-item">
                    <a href="#" className="nav-link">Our Products</a>
                </li>
                <li class="nav-item">
                    <a href="#" className="nav-link">Our Team</a>
                </li>
                <li class="nav-item">
                    <a href="#" className="nav-link">Contact</a>
                </li>
            </ul>
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>


        </nav>
</header>


        </div>
    )
}
export default Navigation
