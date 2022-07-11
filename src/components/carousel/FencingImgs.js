import React from 'react'

const FencingImgs = ({ src }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col"></div>
                <div id="constructionPhotos" className="carousel slide col-lg-10" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="..." class="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src={src} class="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="..." class="d-block w-100" alt="..."></img>
                        </div>
                    </div>
                    <CarouselButton />
                    <NextButton />
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}

export default FencingImgs
