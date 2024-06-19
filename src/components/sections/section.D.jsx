import 'sectionD.css'
import eletric_pokemon from '../../assets/pokemons/eletric_pokemon (5).png';

function SectionD (props) { 
  return (
    <>
    <div id='background'>
      <div id='sectionD'>
        <div id='arrow'>
          <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZH
          RoPSIyOCIgaGVpZ2h0PSIyOCIgZmlsbD0iIzAwMDAwMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiPjxwYXRoIGQ9Ik0yMTMuN
          jYsMTk0LjM0YTgsOCwwLDAsMS0xMS4zMiwxMS4zMkwxMjgsMTMxLjMxLDUzLjY2LDIwNS42NmE4LDgsMCwwLDEtMTEuMzIt
          MTEuMzJsODAtODBhOCw4LDAsMCwxLDExLjMyLDBabS0xNjAtNjguNjhMMTI4LDUxLjMxbDc0LjM0LDc0LjM1YTgsOCwwLDA
          sMCwxMS4zMi0xMS4zMmwtODAtODBhOCw4LDAsMCwwLTExLjMyLDBsLTgwLDgwYTgsOCwwLDAsMCwxMS4zMiwxMS4zMloiPj
          wvcGF0aD48L3N2Zz4=' alt='arrow-up-image'>{props.arrow}</img>

        </div>
        <div className='texts'>
        <h1 className='title'>{props.title}Calcule o consumo de energia da sua casa</h1>
        <p className='paragraph1'>{props.text}Descubra quanto sua casa consome de energia e <br></br> identifique áreas onde você
         pode economizar <br></br> dinheiro. Use nossa calculadora de consumo de <br></br> energia gratuita para obter uma 
         análise <br></br> personalizada do uso de energia da sua casa. <br></br> Basta inserir algumas informações básicas e nós
          <br></br> faremos o resto. Com essas informações valiosas, <br></br> você pode tomar decisões informadas e <br></br>
         implementar mudanças simples para reduzir seu <br></br> consumo de energia e economizar dinheiro. <br></br></p>
        <p className='paragraph3'>{props.text} <br></br> Clique no botão abaixo para acessar a <br></br> calculadora agora mesmo!</p> 
        <button id='calculator'>{props.calculator}CALCULADORA</button>
        <img id='eletric-pokemon-5' src={eletric_pokemon} alt='eletric-pokemon-5'>{props.pokemon}</img> 
        </div>


      </div>
    </div>
    </>
  );
}

export default SectionD