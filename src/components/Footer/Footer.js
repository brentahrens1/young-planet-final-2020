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
                    <li className="footer__list-item"><a href="" target="_blank">Youtube</a></li>
                    <li className="footer__list-item"><a href="" target="_blank">Bandcamp</a></li>
                    <li className="footer__list-item"><a href="" target="_blank">Spotify</a></li>
                </ul>
                <ul className="footer__list list2">
                    <li className="footer__list-item"><a href="" target="_blank">Instagram</a></li>
                    <li className="footer__list-item"><a href="" target="_blank">Twitter</a></li>
                    <li className="footer__list-item"><a href="" target="_blank">Facebook</a></li>
                </ul>
            </div>
            <div className="footer__contact">
                <h1>Contact Us</h1>
                <h2><a href="" target="_blank">spinyoungplanet@gmail.com</a></h2>
            </div>
        </div>
    )
}

export default Footer