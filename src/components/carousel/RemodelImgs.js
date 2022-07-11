import React from 'react'

const RemodelImgs = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col"></div>
                    <div id="constructionPhotos" className="carousel slide col-lg-10" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <CarouselImage src={'https://www.gclscontracting.com/images/slides/nivo3.jpg'} />
                            </div>
                            <div className="carousel-item">
                                <CarouselImage src={'https://www.gclscontracting.com/images/slides/nivo4.jpg'} />
                            </div>
                            <div className="carousel-item">
                                <CarouselImage src={'https://www.gclscontracting.com/images/slides/nivo2.jpg'} />
                            </div>
                        </div>
                        <CarouselButton />
                        <NextButton />
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        </div>
    )
}

export default RemodelImgs
