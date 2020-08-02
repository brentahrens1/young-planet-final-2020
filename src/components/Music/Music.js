import React, { useState } from 'react'
import '../../sass/_music.scss'

import { albumRoutes } from '../../const/albumRoutes'
import { singleRoutes } from '../../const/singleRoutes'

const Music = () => {
    const [ showAlbum, setShowAlbum ] = useState(true)
    const [ showSingle, setShowSingle ] = useState(false)

    const handleAlbum = () => {
        setShowSingle(false)
        setShowAlbum(true)
    }

    const handleSingle = () => {
        setShowAlbum(false)
        setShowSingle(true)
    }

    return (
        <div className="music">
            <div className="music__toggle">
                <h1 onClick={handleAlbum} className={showAlbum ? "music__nav-active" : ""}>Albums</h1>
                <h1 onClick={handleSingle} className={showSingle ? "music__nav-active" : ""}>Singles</h1>
            </div>
            <div className="music__grid">
                {
                    albumRoutes.map((route, idx) => 
                        <div key={idx} className={showAlbum ? "music__album-covers" : "hide"}>
                            <img src={route.img} alt={route.title} />
                                <div className={showAlbum ? "music__album-links" : "hide"}>
                                    <ul>
                                        <li><a href={route.apple} target="_blank" rel="noopener noreferrer">Apple Music</a></li>
                                        <li><a href={route.spotify} target="_blank" rel="noopener noreferrer">Spotify</a></li>
                                        <li><a href={route.soundcloud} target="_blank" rel="noopener noreferrer">Soundcloud</a></li>
                                    </ul>
                                </div>     
                        </div>
                    )
                }
            </div>
            <div className="music__grid">
                {
                    singleRoutes.map((route, idx) => 
                        <div key={idx} className={showSingle ? "music__single-covers" : "hide"}>
                            <img src={route.img} alt={route.title} />
                            <div className={showSingle ? "music__single-links" : "hide"}>
                                <ul>
                                    <li><a href={route.soundcloud} target="_blank" rel="noopener noreferrer">Soundcloud</a></li>
                                </ul>
                            </div>  
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Music