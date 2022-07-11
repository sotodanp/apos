import React from 'react'
import Services from './components/Services/Services'
import { service } from './components/Services/data'

const ServicesPage = () => {
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className='serviceContainer'>
            <h2>Services</h2>
            <div className='servCol'>

                {service.map((serv, index) => {
                    return (
                        <Services text={capitalizeFirstLetter(serv.type)} key={index} src={serv.imgs[0]} />
                    )
                })}

            </div>

        </div>

    )
}

export default ServicesPage