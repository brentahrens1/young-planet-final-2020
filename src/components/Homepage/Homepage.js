import React from 'react'
import '../../sass/_homepage.scss'

const Homepage = () => {
    return (
        <div className="home">
            <div className="home__section home__parallax home__banner1" />
            <div className="home__section home__static">
                <h1>Section one</h1>
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