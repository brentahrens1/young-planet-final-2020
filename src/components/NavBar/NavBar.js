import React, { useState } from 'react'
import '../../sass/_nav.scss'
import { Link } from 'react-router-dom'

import NavLogo from "../../images/logos/black-logo-second.jpg"

const NavBar = () => {
    const [ isOpen, setIsOpen ] = useState(false)
    window.onresize = () => (window.innerWidth > 900 && isOpen) && setIsOpen(false)

    return (
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
            <div className={`hamburger ${isOpen ? "open" : "closed"}`} onClick={() => setIsOpen(!isOpen)}>
                <div className="hamburger__bar" />
                <div className="hamburger__bar" />
                <div className="hamburger__bar" />
            </div>
            <div className={`overlay ${isOpen ? "show" : "hide"}`}>
                <ul className="overlay__list">
                    <Link onClick={() => setIsOpen(!isOpen)} to="/"><li className="overlay__list-item">Home</li></Link>
                    <Link onClick={() => setIsOpen(!isOpen)} to="/music"><li className="overlay__list-item">Music</li></Link>
                    <Link onClick={() => setIsOpen(!isOpen)} to="/gallery"><li className="overlay__list-item">Gallery</li></Link>
                    <Link onClick={() => setIsOpen(!isOpen)} to="/contact"><li className="overlay__list-item">Contact</li></Link>                    
                </ul>
            </div>
        </div>
    )
}

export default NavBar