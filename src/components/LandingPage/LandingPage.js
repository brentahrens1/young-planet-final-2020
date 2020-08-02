import React, { useState } from 'react'
import '../../sass/_landing-page.scss'

import { Link } from 'react-router-dom'

import orare from '../../images/covers/albums/orare.jpg'

const LandingPage = () => {
    const [ close, doClose ] = useState(false)

    return (
        <div className={`landing ${close ? "hide" : "show"}`} onClick={() => doClose(!close)}>
            <div className="close">
                <div className="close__bar" />
                <div className="close__bar" />
            </div>
            <div className="landing__content">
                <div className="landing__cover">
                    <img src={orare} alt="Young Planet x Downtown Dawson - Orare" />
                </div>
                <div className="landing__info">
                    <h1>Available for Stream / Download</h1>
                    <button><a href="http://smarturl.it/orare" target="_blank">Listen Here</a></button>
                    <button><Link to="/">Enter full site</Link></button>
                </div>
            </div>
        </div>
    )
}

export default LandingPage