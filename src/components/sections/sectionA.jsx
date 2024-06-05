import './sectionA.css'
import eletric_pokemon from "../../assets/pokemons/eletric_pokemon (2).png"


function SectionA(props) {

    return (

      
    <section id="background">

      <div id='sectionA'>
        <div id="arrow" >
         <br></br> <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My
            5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgZmlsbD0iIzAwMDAwMCIgdmlld0JveD0iMCAw
            IDI1NiAyNTYiPjxwYXRoIGQ9Ik0yMTMuNjYsMTk0LjM0YTgsOCwwLDAsMS0xMS4zMiwxMS4zMkwxMjgsMTMxLjMxLDUzL
            jY2LDIwNS42NmE4LDgsMCwwLDEtMTEuMzItMTEuMzJsODAtODBhOCw4LDAsMCwxLDExLjMyLDBabS0xNjAtNjguNjhMMTI4
            LDUxLjMxbDc0LjM0LDc0LjM1YTgsOCwwLDAsMCwxMS4zMi0xMS4zMmwtODAtODBhOCw4LDAsMCwwLTExLjMyLDBsLTgwLDgwY
            TgsOCwwLDAsMCwxMS4zMiwxMS4zMloiPjwvcGF0aD48L3N2Zz4=" alt='arrow-up-image'>{props.arrow}</img>

        </div>
      
        <h1 className='title'>{props.title}<br></br> <br></br> Boas práticas para reduzir o consumo de energia </h1>
        <p className='paragraph'>{props.text}Você sabia que pequenas mudanças nos hábitos<br></br> diários podem fazer uma grande 
        diferença no<br></br> consumo de energia da sua casa? Adotar<br></br> práticas sustentáveis é essencial para
        economizar<br></br> na conta de luz e contribuir para um futuro mais<br></br> sustentável.<br></br> Neste tópico, você
        aprenderá dicas valiosas para<br></br> reduzir o consumo de energia, como:<br></br>
          • Desligar aparelhos eletrônicos quando<br></br> não estiverem em uso<br></br>
          • Usar lâmpadas LED<br></br>
          • Otimizar o uso de ar-condicionado e aquecedores<br></br>
          • Isolar termicamente sua casa<br></br>
          • Usar eletrodomésticos eficientes <br></br>

        Seguindo essas práticas, você não apenas<br></br> economizará dinheiro, mas também ajudará a<br></br> preservar
        o meio ambiente. Vamos começar a<br></br> jornada para um futuro mais sustentável e<br></br> econômico!
        </p>
      
        <img id="pokemon-sectionA" src={eletric_pokemon} alt='pokemon-eletric2'>{props.pokemon}</img>
        

      </div>
    </section>
    );
  }
  
export default SectionA