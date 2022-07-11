import { useParams } from "react-router-dom"
import Carousel from "../carousel/Carousel";
import Button from "../buttons/Button";
import Email from "../Email";
import { service } from "./data";




const ServePage = () => {



    const { workType } = useParams();
    const serviceType = service.find(serv => serv.type === workType)


    return (
        <div className='serviceTitle'>
            <h2>{workType}</h2>
            <div className='serviceBox'>
                <div className='serviceImg'>
                    <Carousel src={serviceType.imgs[0]} src2={serviceType.imgs[1]} src3={serviceType.imgs[2]} />
                    <p className='serviceP'>{serviceType.description}</p>
                </div>
                <div className='serviceDescription'>
                    <ul className='ServiceBtn'>
                        {service.map((serv, index) => {
                            return (
                                <div key={index} className='listItem'><Button href={`/services/${serv.type}`} text={serv.type} /></div>
                            )
                        })}

                    </ul>
                </div>
            </div>
            <Email />
        </div>
    )
}

export default ServePage