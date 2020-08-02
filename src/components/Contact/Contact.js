import React from 'react'
import '../../sass/_contact.scss'

import cididaProfile from '../../images/profile/cidida-profile.jpg'
import julyProfile from '../../images/profile/july-profile.jpg'
import ypProfile from '../../images/gallery/studio.jpg'

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact__card">
                <div className="contact__card-image">
                    <img src={ypProfile} alt="Young Planet" />
                </div>
                <div className="contact__card-content">
                    <h3><a href="mailto:spinyoungplanet@gmail.com" target="_blank" rel="noopener noreferrer">spinyoungplanet@gmail.com</a></h3>
                    <h3><a href="https://www.instagram.com/young_planet/" target="_blank" rel="noopener noreferrer">Instagram</a></h3>
                    <h3><a href="https://soundcloud.com/spinyoungplanet" target="_blank" rel="noopener noreferrer">Soundcloud</a></h3>
                </div>
            </div>
            <div className="contact__card">
                <div className="contact__card-image cidida">
                    <img src={cididaProfile} alt="Young Planet" />
                </div>
                <div className="contact__card-content">
                    <h3>MC / Writer</h3>
                    <h3><a href="mailto:cidida@gmail.com" target="_blank" rel="noopener noreferrer">cidida@gmail.com</a></h3>
                    <h3><a href="https://www.instagram.com/cidida" target="_blank" rel="noopener noreferrer">Instagram</a></h3>
                </div>
            </div>
            <div className="contact__card">
                <div className="contact__card-image july">
                    <img src={julyProfile} alt="Young Planet" />
                </div>
                <div className="contact__card-content">
                    <h3>Producer / Engineer / Writer</h3>
                    <h3><a href="mailto:julyporter@gmail.com" target="_blank" rel="noopener noreferrer">julyporter@gmail.com</a></h3>
                    <h3><a href="https://www.instagram.com/julyporter" target="_blank" rel="noopener noreferrer">Instagram</a></h3>
                </div>
            </div>
        </div>
    )
}

export default Contact