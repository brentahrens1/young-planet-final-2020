import React, { useState } from 'react'
import '../../sass/_landing-page.scss'

const LandingPage = () => {
    const [ close, doClose ] = useState(false)

    return (
        <div className={`landing ${close ? "hide" : "show"}`} onClick={() => doClose(!close)}>
            <div className="close">
                <div className="close__bar" />
                <div className="close__bar" />
            </div>
            <div className="landing__content">
                <h1>This is the landing page</h1>
            </div>
        </div>
    )
}

export default LandingPage