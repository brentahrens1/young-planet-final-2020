import React from 'react'
import '../../sass/_homepage.scss'


import Orare from '../../images/covers/albums/orare.jpg'
import Merch from '../../images/merch/merch.JPG'

const Homepage = () => {
    return (
        <div className="home">
            <div className="home__section home__parallax home__banner1"></div>
            <div className="home__static">
                <div class="home__static-image">
                    <img src={Orare} alt="Young Planet x Downtown Dawson - Orare" />
                </div>
                <div className="home__static-content">
                    <h1>Latest Release</h1>
                    <h4>Available now on all platforms for stream / download</h4>
                    <h2><a href="#">Listen Now</a></h2>
                </div>
            </div>
            <div className="home__section home__parallax home__banner2"></div>
            <div className="home__video">
                <div class="video-container video-one">
                    <iframe src="https://www.youtube.com/embed/QdxfZIarrC0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
                <div class="video-container video-two">
                    <iframe src="https://www.youtube.com/embed/7wwhUPkcJ3U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
            </div>
            <div className="home__section home__parallax home__banner3"></div>
            <div className="home__static">
                <div class="home__static-image">
                    <img src={Merch} alt="Young Planet x Downtown Dawson - Orare" />
                </div>
                <div className="home__static-content">
                    <h1>Online Store</h1>
                    <h4>Available soon.</h4>
                    <h2><a href="#">Contact</a></h2>
                </div>
            </div>
        </div>
    )
}

export default Homepage