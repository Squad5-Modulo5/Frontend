import './presentation.css'
import eletricPokemon from "../../assets/pokemons/eletric_pokemon (1).png"

export default function Presentation () {
    return(
        <div className="presentation">
            <div className="texts">
                <h1>Práticas sustentáveis</h1>
                <h2>Conscientize-se sobre o uso<br></br> da energia elétrica</h2>
                <p id='text1'>Descubra práticas valiosas para reduzir o<br></br> consumo de energia em sua casa.</p>
                <p id='text2'>Junte-se a nós na jornada por um futuro mais sustentável e econômico!</p>
            </div>
            <img id='image'src={eletricPokemon} alt="eletric_pokemon"/>
        </div>
    )
}
