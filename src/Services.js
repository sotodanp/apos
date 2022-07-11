import React from 'react'
import Services from './components/Services/Services'

const ServicesPage = () => {
    return (
        <div className='serviceContainer'>
            <h2>Services</h2>
            <div className='servCol'>
                <Services text='Remodels' src='https://ironcityconstruction.com/wp-content/uploads/2022/02/processed-5b1e6e4d-fa1f-4bdf-8bbe-596085b2cfad_hP0mPzY0-1.jpg' />
                <Services text='Repairs' src='https://ironcityconstruction.com/wp-content/uploads/2022/02/processed-5b1e6e4d-fa1f-4bdf-8bbe-596085b2cfad_hP0mPzY0-1.jpg' />
                <Services text='Painting' src='https://ironcityconstruction.com/wp-content/uploads/2022/02/processed-5b1e6e4d-fa1f-4bdf-8bbe-596085b2cfad_hP0mPzY0-1.jpg' />
                <Services text='Flooring' src='https://ironcityconstruction.com/wp-content/uploads/2022/02/processed-5b1e6e4d-fa1f-4bdf-8bbe-596085b2cfad_hP0mPzY0-1.jpg' />
                <Services text='Fencing' src='https://res.cloudinary.com/decbiiyfg/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1656600603/Fencing/IMG_20210921_154920_xocjcl.jpg' />
                <Services text='Stucco' src='https://res.cloudinary.com/decbiiyfg/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1656608291/Stucco/Polish_20201013_162623006_1_p6sdas.jpg' />
                <Services text='Framing' src='https://res.cloudinary.com/decbiiyfg/image/upload/v1656606260/Stucco/Framing/framing4_bbvo5i.jpg' />
                <Services text='Stucco' src='https://ironcityconstruction.com/wp-content/uploads/2022/02/processed-5b1e6e4d-fa1f-4bdf-8bbe-596085b2cfad_hP0mPzY0-1.jpg' />
                <Services text='Stucco' src='https://ironcityconstruction.com/wp-content/uploads/2022/02/processed-5b1e6e4d-fa1f-4bdf-8bbe-596085b2cfad_hP0mPzY0-1.jpg' />
            </div>

        </div>

    )
}

export default ServicesPage