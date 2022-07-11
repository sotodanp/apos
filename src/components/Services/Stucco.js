import Button from "../buttons/Button"
import Carousel from "../carousel/Carousel"
import Email from "../Email"

const Remodels = () => {
    const desc = 'Do you desperately need to get your roof repaired, but don’t know who to turn to or where to begin? A well-maintained roof is key to safeguarding you and your property from the elements, but sometimes it needs repairs.However, if you’re like most people, you don’t have time to research and call around for quotes.Let Iron City Construction take care of all your roofing repairs.We are Tampa’s top roofing company and offer quality roof repairs at affordable prices.We’re also licensed, certified, and insured, so you can rest assured that your home or commercial property is in good hands. Finally, we provide a 100 % satisfaction guarantee, so you have nothing to lose. Get in touch today for a free estimate! '


    const src = 'http://res.cloudinary.com/decbiiyfg/image/upload/v1656608547/Stucco/signal-2022-06-30-121838_001_oohoub.jpg'
    const src2 = 'https://res.cloudinary.com/decbiiyfg/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1656608289/Stucco/Polish_20201006_161424200_b3kodk.jpg'
    const src3 = 'https://res.cloudinary.com/decbiiyfg/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1656608291/Stucco/Polish_20201013_162623006_1_p6sdas.jpg'

    return (
        <div className='serviceTitle'>
            <h2>Stucco</h2>
            <div>        <div className='serviceBox'>
                <div className='serviceImg'>
                    <Carousel src={src} src2={src2} src3={src3} />
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
                        <div className='listItem'><Button href='/services/framing' text="Framing" /></div>
                    </ul>
                </div>
            </div > </div>
            <Email />
        </div>
    )
}

export default Remodels