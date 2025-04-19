
import EletricSecondpokemon from "../../assets/pokemons/eletric_pokemonsecond.png"


function WhiteSection(props) {

  return (


    <section id='sectionA' className="overlapping-section">


      <div className="container">
        <div className="text-center">
          <img className="arrow mt-3" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My
            5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgZmlsbD0iIzAwMDAwMCIgdmlld0JveD0iMCAw
            IDI1NiAyNTYiPjxwYXRoIGQ9Ik0yMTMuNjYsMTk0LjM0YTgsOCwwLDAsMS0xMS4zMiwxMS4zMkwxMjgsMTMxLjMxLDUzL
            jY2LDIwNS42NmE4LDgsMCwwLDEtMTEuMzItMTEuMzJsODAtODBhOCw4LDAsMCwxLDExLjMyLDBabS0xNjAtNjguNjhMMTI4
            LDUxLjMxbDc0LjM0LDc0LjM1YTgsOCwwLDAsMCwxMS4zMi0xMS4zMmwtODAtODBhOCw4LDAsMCwwLTExLjMyLDBsLTgwLDgwY
            TgsOCwwLDAsMCwxMS4zMiwxMS4zMloiPjwvcGF0aD48L3N2Zz4=" alt='arrow-up-image'>{props.arrow}</img>
          <h1 className='title'>{props.title}<br></br> <br></br> Boas práticas para reduzir o consumo de energia </h1>

        </div>


        <div className=" mag row align-items-center">
          <div className="col-md-7">
            <img className="pokemon-section mt-5" src={EletricSecondpokemon} alt='pokemon-eletric2'>{props.pokemon}</img>
          </div>
          <text className="col-md-5 mt-3 mt-md-0" >
            {props.title}
            <br />
            <br />
            <article className="">
              <p className='paragraph '>
                Você sabia que pequenas mudanças nos hábitos diários podem fazer uma grande
                diferença no consumo de energia da sua casa? Adotar práticas sustentáveis é essencial para
                economizar na conta de luz e contribuir para um futuro mais sustentável.
              </p>

              <p className='paragraph '>
                Neste tópico, você aprenderá dicas valiosas para reduzir o consumo de energia, como:
              </p>
             
              <ul className="energy-tips-list  text-black ps-3 fw-normal text-lowercase  my-2 ms-5">
                <li className="">Desligar aparelhos eletrônicos quando não estiverem em uso</li>
                <li className="fw-normal" >Usar lâmpadas LED</li>
                <li className="fw-normal">Otimizar o uso de ar-condicionado e aquecedores</li>
                <li className="">Isolar termicamente sua casa</li>
                <li className="fw-normal" >Usar eletrodomésticos eficientes</li>
              </ul>

              <p className='paragraph'>
                Seguindo essas práticas, você não apenas economizará dinheiro, mas também ajudará a preservar
                o meio ambiente. Vamos começar a jornada para um futuro mais sustentável e econômico!
              </p>
            </article>
          </text>
        </div>
      </div>



    </section>
  );
}

export default WhiteSection