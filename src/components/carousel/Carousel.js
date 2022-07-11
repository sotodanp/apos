import CarouselButton from './CarouselButton'
import NextButton from "../NextButton"

const Carousel = ({ src, src2, src3 }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col"></div>
                <div id="constructionPhotos" className="carousel slide col-lg-10" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className='container'>
                                <img src={src} alt="..."></img>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={src2} alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src={src3} alt="..."></img>
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

export default Carousel