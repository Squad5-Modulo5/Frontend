import './sectionC.css'
import eletric_pokemon from "../../assets/pokemons/eletric_pokemon_03.png"

function SectionC(props) {

    return (
    <>
      
    <div id="background">

      <div id='sectionC'>
        <div id="arrow" >
         <br></br> <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My
            5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgZmlsbD0iIzAwMDAwMCIgdmlld0JveD0iMCAw
            IDI1NiAyNTYiPjxwYXRoIGQ9Ik0yMTMuNjYsMTk0LjM0YTgsOCwwLDAsMS0xMS4zMiwxMS4zMkwxMjgsMTMxLjMxLDUzL
            jY2LDIwNS42NmE4LDgsMCwwLDEtMTEuMzItMTEuMzJsODAtODBhOCw4LDAsMCwxLDExLjMyLDBabS0xNjAtNjguNjhMMTI4
            LDUxLjMxbDc0LjM0LDc0LjM1YTgsOCwwLDAsMCwxMS4zMi0xMS4zMmwtODAtODBhOCw4LDAsMCwwLTExLjMyLDBsLTgwLDgwY
            TgsOCwwLDAsMCwxMS4zMiwxMS4zMloiPjwvcGF0aD48L3N2Zz4=" alt='arrow-up-image'>{props.arrow}</img>

        </div>
     
        <h1 className='title'>{props.title}<br></br> <br></br> Boas práticas para reduzir o consumo de energia </h1>
        <p className='paragraph'>{props.text}Entender o consumo de energia da sua casa é o <br></br> primeiro passo
         para reduzir o desperdício e<br></br> economizar dinheiro. Neste tópico, mostraremos<br></br> como identificar os 
         aparelhos que consomem<br></br> mais energia, ler etiquetas de eficiência<br></br> energética e usar um medidor de 
         energia. Com<br></br> essas informações valiosas, você pode tomar<br></br> decisões informadas e implementar mudanças<br></br> 
         simples para tornar sua casa mais eficiente em<br></br> termos de energia. Vamos começar a economizar<br></br> energia e reduzir
          nossa pegada de carbono<br></br> juntos!
          <br></br>
          <br></br>
          • Identifique os aparelhos que consomem mais<br></br> energia<br></br>
          • Leia as etiquetas de eficiência energética<br></br>
          • Use um medidor de energia
      

        </p>

        <img id="pokemon-sectionC" src={eletric_pokemon} alt='pokemon-eletric3'>{props.pokemon}</img>

        </div> 
    
      </div>
    
    </>
    );
  }
  

export default SectionC