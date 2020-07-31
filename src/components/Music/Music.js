import React, { useState } from 'react'
import '../../sass/_music.scss'

import { albumRoutes } from '../../const/albumRoutes'
import { singleRoutes } from '../../const/singleRoutes'
import { singleLinkRoutes } from '../../const/singleLinkRoutes'
import { albumLinkRoutes } from '../../const/albumLinkRoutes'

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
                <div className={showAlbum ? "music__album-covers" : "hide"}>
                    <img key={idx} src={route.img} alit={route.title} />
                        <div>
                            {
                                albumLinkRoutes.map((route, idx) => 
                                <div className={showAlbum ? "music__album-links" : "hide"}>
                                    <ul>
                                        <li><a href={route.apple} target="_blank">Apple Music</a></li>
                                        <li><a href={route.spotify} target="_blank">Spotify</a></li>
                                        <li><a href={route.soundcloud} target="_blank">Soundcloud</a></li>
                                    </ul>
                                </div>     
                                )
                            }
                        </div>
                </div>
                )
            }
            </div>
            <div className="music__grid">
            {
                singleRoutes.map((route, idx) => 
                    <div className={showSingle ? "music__single-covers" : "hide"}>
                        <img key={idx} src={route.img} alit={route.title} />
                        <div>
                            {
                                singleLinkRoutes.map((route, idx) => 
                                <div className={showSingle ? "music__single-links" : "hide"}>
                                    <ul>
                                        <li><a href={route.soundcloud} target="_blank">Soundcloud</a></li>
                                    </ul>
                                </div>     
                                )
                            }
                        </div>
                    </div>
                )
            }
            </div>
        </div>
    )
}

export default Music