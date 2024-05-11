import { Link } from "react-router-dom"
import "./button.css"


// eslint-disable-next-line react/prop-types
export default function Button ({link, name}) {
    return(
        <>
        <button><Link to={link}>{name}</Link></button>
        </>
    )
}
