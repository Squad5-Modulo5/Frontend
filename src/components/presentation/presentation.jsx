
import eletricPokemon from "../../assets/pokemons/eletric_pokemon (1).png"

export default function Presentation () {
    return(
        <section className="presentation align-items-center ">
      <div className='container'>
            <div className='row align-items-center  '>
            <div className="col-md-7   order-1 order-md-0  mt-md-0 ">
                <h1>Práticas sustentáveis</h1>
                <h2>Conscientize-se sobre o uso<br></br> da energia elétrica</h2>
                <p id='text1'>Descubra práticas valiosas para reduzir o<br></br> consumo de energia em sua casa.</p>
                <p id='text2' className='w-75'>Junte-se a nós na jornada por um futuro mais sustentável e econômico!</p>
            </div>
            <div className=' order-0  col-md-5 d-flex justify-content-center'>
            <img id='image'src={eletricPokemon} className='' alt="eletric_pokemon"/>
            </div>
       </div>
       </div>
        </section>
    )
}
