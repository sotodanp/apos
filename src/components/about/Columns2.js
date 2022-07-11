import React from 'react'
import Info from './Info'
import AboutImg from './AboutImg'


const Columns2 = () => {
    return (
        <div className='aboutCol'>
            <div>
                <h5 style={{ fontWeight: 700 }} >Why hire us?</h5>

                <Info text="100% Satisfaction Guarantee. We won’t rest till you’re delighted with the results." />

                <h5 style={{ fontWeight: 700 }} >Licensed and 100% Insured</h5>

                <Info text="Avail of Convenient Financing. Get convenient finance for your roofing and construction projects for as little as 1.49%. Get Help With The Insurance Process. Filing confusing insurance claims can be tiring; we’ll assist you throughout the process." />

                <h5 style={{ fontWeight: 700 }} >Competetive Pricing</h5>

                <Info text='Hiring a dependable contractor can be challenging, especially when it comes to roof repairs. The roof is the most crucial component of your property, so you want to make sure you’re hiring someone reputable who will do quality work and won’t leave you with a bigger mess than before.' />
            </div>
            <div>
                <AboutImg src="https://s3-media0.fl.yelpcdn.com/bphoto/m3vRbIXV-oChze6hVnapow/o.jpg" alt="" />
            </div>
        </div >
    )
}

export default Columns2
