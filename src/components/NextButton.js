import React from 'react'

const NextButton = () => {
    return (
        <button className="carousel-control-next" type="button" data-bs-target="#constructionPhotos" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    )
}

export default NextButton
