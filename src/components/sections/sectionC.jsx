
import eletric_pokemon from "../../assets/pokemons/eletric_pokemon (3).png"

function SectionC(props) {

  return (
    <section id="background" className="overlapping-section">

      <div id='sectionC' >
        <div className="text-center" >
          <br></br> <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My
            5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgZmlsbD0iIzAwMDAwMCIgdmlld0JveD0iMCAw
            IDI1NiAyNTYiPjxwYXRoIGQ9Ik0yMTMuNjYsMTk0LjM0YTgsOCwwLDAsMS0xMS4zMiwxMS4zMkwxMjgsMTMxLjMxLDUzL
            jY2LDIwNS42NmE4LDgsMCwwLDEtMTEuMzItMTEuMzJsODAtODBhOCw4LDAsMCwxLDExLjMyLDBabS0xNjAtNjguNjhMMTI4
            LDUxLjMxbDc0LjM0LDc0LjM1YTgsOCwwLDAsMCwxMS4zMi0xMS4zMmwtODAtODBhOCw4LDAsMCwwLTExLjMyLDBsLTgwLDgwY
            TgsOCwwLDAsMCwxMS4zMiwxMS4zMloiPjwvcGF0aD48L3N2Zz4=" alt='arrow-up-image'>{props.arrow}</img>

        </div>
        <div className="container">
          <div className="row align-items-center ">
            <h1 className='title'>{props.title}<br></br> <br></br> Boas práticas para reduzir o consumo de energia </h1>
            <div className="col-md-7"> <img className="pokemon-section  mt-5" src={eletric_pokemon} alt='pokemon-eletric3'>{props.pokemon}</img></div>

            <text className="col-md-5 mt-3 mt-md-0">
              <article>
                <p className='paragraph text-justify'> {/* Adicione text-justify */}
                  Entender o consumo de energia da sua casa é o primeiro passo
                  para reduzir o desperdício e economizar dinheiro. Neste tópico, mostraremos como identificar os
                  aparelhos que consomem mais energia, ler etiquetas de eficiência
                  energética e usar um medidor de energia. Com essas informações valiosas, você pode tomar
                  decisões informadas e implementar mudanças simples para tornar sua casa mais eficiente em
                  termos de energia. Vamos começar a economizar energia e reduzir
                  nossa pegada de carbono juntos!
                </p>

                <ul className="energy-tips-list mt-3"> {/* Substitui os <br> por lista */}
                  <li>Identifique os aparelhos que consomem mais energia</li>
                  <li>Leia as etiquetas de eficiência energética</li>
                  <li>Use um medidor de energia</li>
                </ul>
              </article>
            </text>
          </div>
        </div>
      </div>

    </section>


  );
}


export default SectionC