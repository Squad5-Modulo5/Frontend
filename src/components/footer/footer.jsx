import ecoelektSimbulo from "../../assets/logo/ecoelekt.simbulo.svg"
import './footer.css'
export default function Footer (){
    return(
        <div className="background1">
        <div className="footer">
            <img id='simb'src={ecoelektSimbulo} alt="ecoelekt-simbulo"/>
        </div>
        </div>
    )
}