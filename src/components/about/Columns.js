import React from 'react'

import AboutImg from './AboutImg'
import Info from './Info'

const Columns = () => {
    return (
        <div className='aboutCol'>
            <div>
                <Info text="Hiring a dependable contractor can be challenging, especially when it comes to roof repairs. The roof is the most crucial component of your property, so you want to make sure you’re hiring someone reputable who will do quality work and won’t leave you with a bigger mess than before." />

                <Info text="Iron City Construction is Tampa’s top roofing contractor. We’re a family-owned company serving residential and commercial clients in Tampa, FL, and the surrounding areas and have been in business since 2013. We are accredited, insured, and licensed with over 2500 approved projects to our name." />

                <Info text="One of the main reasons behind our success is that our owner is hands-on with every project we undertake. We have 5-Star reviews from many of our clients and provide a 100% satisfaction guarantee." />
            </div>
            <div>
                <AboutImg src="https://s3-media0.fl.yelpcdn.com/bphoto/DeAuCVvbWHSURgV6_LWdsw/o.jpg" alt="" />
            </div>
        </div>
    )
}

export default Columns
