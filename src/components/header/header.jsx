import ecoelektLogo from "../../assets/logo/ecoelekt.logo.svg"
import Button from "../button/button.jsx"
import "./header.css"

export default function Header (){
    return(
        <div className="header">
            <img id= "header-logo" src={ecoelektLogo} alt="ecoelekt-logo" />
            <ul className="header-links">
                <li><a href="">Home</a></li>
                <li><a href="">Calculator</a></li>
            </ul>
            <Button name={"Login"}/>
        </div>
    )
}