import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <nav>
                <Link to="/" className="nav-item">Homepage</Link>
                <a href="/dummyhome"> dup Homepage</a>
                <Link to="/about" className="nav-item"> Aboutme</Link>

                <Link to="/contact" className="nav-item">Contact</Link>
                <Link to="/calculator" className="nav-item">Calculator</Link>
            </nav>
        </>
    )
}

export default Navbar
