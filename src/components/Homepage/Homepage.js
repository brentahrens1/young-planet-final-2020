import React from 'react'
import '../../sass/_homepage.scss'


import Orare from '../../images/covers/orare.jpg'

const Homepage = () => {
    return (
        <div className="home">
            <div className="home__section home__parallax home__banner1" />
            <div className="home__section home__static">
                <div class="home__static-image">
                    <img src={Orare} alt="Young Planet x Downtown Dawson - Orare" />
                </div>
                <div className="home__static-content">
                    <h2>Latest Release</h2>
                    <h4>Available now on all platforms for stream / download</h4>
                    <button>Listen Now</button>
                </div>
            </div>
            <div className="home__section home__parallax home__banner2" />
            <div className="home__static">
                <h1>Section two</h1>
            </div>
            <div className="home__section home__parallax home__banner3" />
        </div>
    )
}

export default Homepage