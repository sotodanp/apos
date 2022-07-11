import React from 'react'
import Button from '../buttons/Button'
import Carousel from '../carousel/Carousel'


const ServiceBox = ({ desc, src }) => {
    return (
        <div className='serviceBox'>
            <div className='serviceImg'>
                <Carousel />
                <p className='serviceP'>{desc}</p>
            </div>
            <div className='serviceDescription'>
                <ul className='ServiceBtn'>
                    <div className='listItem'><Button href='/services/flooring' text="Flooring" /></div>
                    <div className='listItem'><Button href='/services/painting' text="Painting" /></div>
                    <div className='listItem'><Button href='/services/remodels' text="Remodels" /></div>
                    <div className='listItem'><Button href='/services/repairs' text="Repairs" /></div>
                    <div className='listItem'><Button href='/services/fencing' text="Fencing" /></div>
                    <div className='listItem'><Button href='/services/stucco' text="Stucco" /></div>
                </ul>
            </div>
        </div >
    )
}

export default ServiceBox
