import React from "react";
import {Link} from 'react-router-dom';
import "./Navbar.css"
import Home from "./Home";
import About from "./About";
import sevices from "./services";
function Navbar()
{
    return(
        <div className="navbar">
            <div>
               <h1> logo </h1> 
            </div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/services.jsx">Services</Link>
                </li>
                <li>
                    <Link to="/about">about</Link>
                </li>
                <li>
                    <Link to="/contact">contact</Link>
                </li>
            </ul>
        </div>
    );
}
export default Navbar;