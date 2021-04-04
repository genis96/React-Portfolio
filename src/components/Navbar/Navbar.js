import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
    // update the state from what it was to what i want it to be
    const [click, setClick] = useState(false);
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        Genis <i class="fas fa-code-branch" />
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </Link>
                    <div className="menu-icon">

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
