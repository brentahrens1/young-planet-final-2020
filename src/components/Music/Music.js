import React from 'react'
import '../../sass/_music.scss'

import { routes } from '../../const/routes'

const Music = () => {
    return (
        <div className="music">
            <div className="music__toggle">
                <h1>Albums</h1>
                <h1>Singles</h1>
            </div>
            <div className="music__grid">
            {
                routes.map((route, idx) => 
                <div className="music__covers">
                    <img src={route.img} alit={route.title} />
                </div>
                )
            }
            </div>
        </div>
    )
}

export default Music