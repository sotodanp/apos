

const ButtonNav = ({ text, color, href }) => {
    return (
        <button className="buttonNav" style={{ color }}><a href={href}>{text}</a></button>
    )
}

export default ButtonNav
