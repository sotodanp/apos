import ButtonNav from "./buttons/ButtonNav"



const Menu = () => {
    return (
        <nav className="navBar">
            <div>
                <ButtonNav text='Home' color='white' href="/" />
                <ButtonNav text='Services' color='white' href="/services" />
                <ButtonNav text='About us' color='white' href="/about" />
                <ButtonNav text='Contact us' color='white' href="/contact" />
            </div>
        </nav>
    )
}

export default Menu
