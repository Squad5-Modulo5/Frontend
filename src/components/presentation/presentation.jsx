import './presentation.css'
import eletricPokemon from "../../assets/pokemons/eletric_pokemon (1).png"

export default function Presentation () {
    return(
        <div className="presentation">
            <div className="texts">
                <h1>práticas sustentáveis</h1>
                <h2>Conscientize-se sobre o uso da energia elétrica</h2>
                <p>Descubra práticas valiosas para reduzir o consumo de energia em sua casa.</p>
                <p>Junte-se a nós na jornada por um futuro mais sustentável e econômico!</p>
            </div>
            <img src={eletricPokemon} alt="eletric_pokemon"/>
        </div>
    )
}
