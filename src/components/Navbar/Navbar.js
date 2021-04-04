import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
    // update the state from what it was to what i want it to be
    const [click, setClick] = useState(false);
    // reversing the state below for burger
    const handleClick = () => setClick(!click);
    const closeBurger = () => setClick(false);
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        GB <i class="fas fa-code-branch" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                    <ul className={click ? "nav-menu actuve" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick="closeBurger">Home</ Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/aboutme" className="nav-links" onClick="closeBurger">About Me</ Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/projects" className="nav-links" onClick="closeBurger">Projects</ Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/skills" className="nav-links" onClick="closeBurger">Skills</ Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contactme" className="nav-links" onClick="closeBurger">Contact Me</ Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
