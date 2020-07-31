import React, { useState } from 'react'
import '../../sass/_music.scss'

import { albumRoutes } from '../../const/albumRoutes'
import { singleRoutes } from '../../const/singleRoutes'

const Music = () => {
    const [ toggle, isToggle ] = useState(false)
    return (
        <div className="music">
            <div className="music__toggle">
                <h1>Albums</h1>
                <h1>Singles</h1>
            </div>
            <div className="music__grid">
            {
                albumRoutes.map((route, idx) => 
                <div className="music__album-covers">
                    <img src={route.img} alit={route.title} />
                </div>
                )
            }
            </div>
            <div className="music__grid">
            {
                singleRoutes.map((route, idx) => 
                <div className="music__single-covers">
                    <img src={route.img} alit={route.title} />
                </div>
                )
            }
            </div>
        </div>
    )
}

export default Music