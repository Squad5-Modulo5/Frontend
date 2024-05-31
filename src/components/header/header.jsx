/* eslint-disable react/prop-types */
import ecoelektLogo from "../../assets/logo/ecoelekt.logo.svg"
import {Link, Outlet} from "react-router-dom";
import Button from "../button/button.jsx";
import "./header.css"

export default function Header ({home}){
    return(
        <div className="header">
            <img id= "header-logo" src={ecoelektLogo} alt="ecoelekt-logo" />
            <ul className="header-links">
                <li><Link to={`/`}>{home}</Link></li>
                <li><Link to={`/Calculate`}>Calculator</Link></li>
            
            </ul>
            <Button link={`/login`} name={"Login"}/>
            <Outlet/>
        </div>
    )
}