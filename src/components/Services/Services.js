import Button from "../buttons/Button"


const Services = ({ text, src }) => {
  return (
    <div className='service'>{text}
      <br></br> <img className="Serving" src={src} alt=''></img>
      <br></br>
      <span><Button href={`/services/${text}`} text='Discover More' /></span>
    </div>
  )
}

export default Services
