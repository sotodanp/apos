import React from 'react'

const Button = ({ text, href }) => {
    return (
        <button className='button from-left'><a href={href}>{text}</a></button>
    )
}

export default Button
