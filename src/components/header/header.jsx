/* eslint-disable react/prop-types */
import ecoelektLogo from "../../assets/logo/ecoelekt.logo.svg"
import {Link} from "react-router-dom";
import Button from "../button/button.jsx";
import "./header.css"

export default function Header ({home, link1, link2, calculate, butonlink,name}){
    return(
        <div className="header">
            <img id= "header-logo" src={ecoelektLogo} alt="ecoelekt-logo" />
            <ul className="header-links">
                <li><Link to={link1}>{home}</Link></li>
                <li><Link to={link2}>{calculate}</Link></li>
            
            </ul>
            <Button link={butonlink} name={name}/>
        
        </div>
    )
}