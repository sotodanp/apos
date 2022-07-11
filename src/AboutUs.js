import React from 'react'
import Columns from './components/about/Columns'
import Columns2 from './components/about/Columns2'
import Button from './components/buttons/Button'

const AboutUs = () => {
    return (
        <div>
            <div className='AboutContainer'>
                <h2>About Us</h2>
            </div>
            <div>
                <Columns />
            </div>
            <div>
                <Columns2 />
            </div>
            <div className='AboutContainer'>
                <Button href='tel:9545433628' text='Call us today' />
                <Button href="/contact" text='Schedule consultation' />
            </div>
        </div>
    )
}

export default AboutUs
