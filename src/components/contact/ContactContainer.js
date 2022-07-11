import React from 'react'
import Email from '../Email'

const ContactContainer = () => {
  return (
    <div >
      <h2>Contact Us</h2>
      <div className='contactColumn'>
        <div className='emailButton'>
          Email
          <a href="mailto: servicetheneednetwork@gmail.com">aposconstruction@gmail.com</a>
        </div>
        <div className='emailButton'>
          Phone
          <a href="tel:9545433628">954-543-3628</a>
        </div>
      </div>
      <div className='contactEmail'>
        <h3>We would love to hear from you</h3>
        <p>Please Enter Your Email And Phone Number On Our Contact Form And We Will Be Happy To Assist You.</p>
        <Email />
      </div>
    </div>
  )
}

export default ContactContainer
