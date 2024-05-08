import { Link } from "react-router-dom"
import "./button.css"

// eslint-disable-next-line react/prop-types
export default function Button ({name}) {
    return(
        <>
        <button><Link to={`/login`}>{name}</Link></button>
        </>
    )
}
