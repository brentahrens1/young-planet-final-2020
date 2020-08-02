import React from 'react'
import '../../sass/_footer.scss'

import Logo from '../../images/logos/black-logo.jpg'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__logo">
                <img src={Logo} alt="Young Planet Logo" />
            </div>
            <div className="footer__links">
                <ul className="footer__list list1">
                    <li className="footer__list-item"><a href="https://www.youtube.com/user/youngplanettv" target="_blank" rel="noopener noreferrer">Youtube</a></li>
                    <li className="footer__list-item"><a href="https://youngplanet.bandcamp.com/music" target="_blank" rel="noopener noreferrer">Bandcamp</a></li>
                    <li className="footer__list-item"><a href="https://open.spotify.com/artist/0pMKfO4YRm8WjHJXmRxV1R" target="_blank" rel="noopener noreferrer">Spotify</a></li>
                </ul>
                <ul className="footer__list list2">
                    <li className="footer__list-item"><a href="https://www.instagram.com/young_planet/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    <li className="footer__list-item"><a href="https://twitter.com/spinyoungplanet" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li className="footer__list-item"><a href="https://www.facebook.com/spinyoungplanet" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                </ul>
            </div>
            <div className="footer__contact">
                <h1>Contact Us</h1>
                <h2><a href="mailto:spinyoungplanet@gmail.com" target="_blank" rel="noopener noreferrer">spinyoungplanet@gmail.com</a></h2>
            </div>
        </div>
    )
}

export default Footer