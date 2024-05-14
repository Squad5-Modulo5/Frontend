import './sectionB.css'
import eletric_pokemon from "../../assets/pokemons/eletric_pokemon (4).png"

function SectionB (props) { 
  return (
    <>
    <div id='background'>
      <div id='sectionB'>
        <div id='arrow'>
          <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgZmlsbD0iIzAwMDAwMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiPjxwYXRoIGQ9Ik0yMTMuNjYsMTk0LjM0YTgsOCwwLDAsMS0xMS4zMiwxMS4zMkwxMjgsMTMxLjMxLDUzLjY2LDIwNS42NmE4LDgsMCwwLDEtMTEuMzItMTEuMzJsODAtODBhOCw4LDAsMCwxLDExLjMyLDBabS0xNjAtNjguNjhMMTI4LDUxLjMxbDc0LjM0LDc0LjM1YTgsOCwwLDAsMCwxMS4zMi0xMS4zMmwtODAtODBhOCw4LDAsMCwwLTExLjMyLDBsLTgwLDgwYTgsOCwwLDAsMCwxMS4zMiwxMS4zMloiPjwvcGF0aD48L3N2Zz4=' alt='arrow-up-image'>{props.arrow}</img>

        </div>
        <div className='texts'>
        <h1 className='title'>{props.title}Faça a sua parte para um futuro mais sustentável!</h1><br></br>
        <br></br> 
        <p className='paragraph'>{props.text}Reduzir o consumo de energia é essencial para <br></br> combater as alterações 
        climáticas e criar um <br></br> futuro mais sustentável. Pequenas mudanças em <br></br> nossos hábitos diários podem fazer uma
        grande <br></br> diferença.<br></br>

        <p className='paragraph2'> <br></br> • Apague as luzes quando sair de um cômodo.<br></br>
            • Desligue aparelhos eletrônicos e <br></br> eletrodomésticos quando não estiverem em<br></br> uso.<br></br>
            • Use lâmpadas LED ou fluorescentes <br></br> compactas, que são mais eficientes em termos <br></br> de energia.<br></br>
            • Instale um termostato programável para <br></br> regular a temperatura da sua casa.<br></br>
            • Vede portas e janelas para evitar correntes <br></br> de ar.<br></br>
            • Tome banhos mais curtos e frios.<br></br>
            • Feche a torneira quente enquanto escova os <br></br> dentes ou faz a barba em dias frios.<br></br>
          </p>
        </p>
        <div className='image'>
            <img id="eletric-pokemon-4" src={eletric_pokemon} alt='eletric-pokemon-4'>{props.pokemon}</img>
        </div>
        </div>

      </div>
    </div>
    </>
  );
}

export default SectionB