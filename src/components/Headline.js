import React from 'react'

const Headline = () => {
    return (
        <div className='headline'>
            <h2>Working for a Better tomorrow</h2>
            <p>Florida Hurricane Products Inc
                <br></br>
                Serving Southern and Central Florida
                <br></br>
            </p>
            <h4 className='Ph'>Contact:</h4>
            <div className='box'>
                <h4 className='phoneLink'><a href='tel:9545433628'>(954) 543-3628</a></h4>
                <br></br>
            </div>

            <p style={{ color: '#008891' }}>COMMERCIAL CONSTRUCTION, RESIDENTIAL, ADDITIONS, REMODELING SINCE 1996</p>
        </div >
    )
}

export default Headline
