import React, { useState } from 'react'
import '../../sass/_nav.scss'
import { Link } from 'react-router-dom'

import NavLogo from "../../images/logos/black-logo-second.jpg"

const NavBar = () => {
    return(
        <div className="nav">
            <div className="nav__logo">
                <Link to="/"><img src={NavLogo} alt="Young Planet Logo" /></Link>
            </div>
            <ul className="nav__list">
                <Link to="/"><li className="nav__list-item">Home</li></Link>
                <Link to="/music"><li className="nav__list-item">Music</li></Link>
                <Link to="/gallery"><li className="nav__list-item">Gallery</li></Link>
                <Link to="/contact"><li className="nav__list-item">Contact</li></Link>
            </ul>
            <div className="hamburger">
                <div className="hamburger__bar" />
                <div className="hamburger__bar" />
                <div className="hamburger__bar" />
            </div>
        </div>
    )
}

export default NavBar