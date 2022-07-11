import React from 'react'
import Button from '../buttons/Button'
import Email from '../Email'

const AllServices = () => {
    return (
        <div className='allServices'>
            <h2><a style={{ width: 'fit-content', color: '#0F3057' }} href='/services'>View All of our Services</a></h2>
            <br></br>
            <div className='column'>
                <Button href='tel:9545433628' text='Book Appointment Via Phone' />
            </div>
            <Email />
        </div>
    )
}

export default AllServices
