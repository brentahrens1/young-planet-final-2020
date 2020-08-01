import React from 'react'
import '../../sass/_gallery.scss'


import cididaShow from '../../images/gallery/cidida-show.jpg'
import elevator from '../../images/gallery/elevator.JPG'
import julyShow from '../../images/gallery/july-show.jpg'
import jumping from '../../images/gallery/jumping.jpg'
import show from '../../images/gallery/show.JPG'
import staircase from '../../images/gallery/staircase.JPG'
import stoop from '../../images/gallery/stoop.jpg'
import studio from '../../images/gallery/studio.jpg'
import show2 from '../../images/gallery/show2.png'

const Gallery = () => {
    return (
        <div className="gallery">
            <div className="gallery__grid">
                <div className="gallery__image one">
                    <img src={cididaShow} alt="Cidida Live Show" />
                </div>
                <div className="gallery__image two">
                    <img src={elevator} alt="Chosen Few Video Shoot" />
                </div>
                <div className="gallery__image three">
                    <img src={julyShow} alt="July Porter on stage" />
                </div>
                <div className="gallery__image four">
                    <img src={jumping} alt="Young Planet jump" />
                </div>
                <div className="gallery__image five">
                    <img src={show} alt="Young Planet Live" />
                </div>
                <div className="gallery__image six">
                    <img src={staircase} alt="Chosen Few Video Shoot" />
                </div>
                <div className="gallery__image seven">
                    <img src={stoop} alt="Young Planet Photo Shoot" />
                </div>
                <div className="gallery__image eight">
                    <img src={studio} alt="Young Planet in the studio" />
                </div>
                <div className="gallery__image nine">
                    <img src={show2} alt="Young Planet live on stage" />
                </div>
            </div>
        </div>
    )
}

export default Gallery