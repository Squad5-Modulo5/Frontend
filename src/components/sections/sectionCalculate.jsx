import "./sectionCauculate.css"
import eletric_pokemon from "../../assets/pokemons/eletric_pokemon (2).png";
import CalculateProduct from "../../views/calculate/index.jsx";
import Header from "../header/header.jsx";


function SectionCalculate(props) {
    return (

        <section id='sectionA'>

                <div id="arrow">

                    {props.arrow}
                </div>

                <h1 className='title'>
                    {props.title}
                    <br/>
                    Boas práticas para reduzir o consumo de energia
                </h1>
                <p className='paragraph'>
                    {props.text}
                    Você sabia que pequenas mudanças nos hábitos diários podem fazer uma grande
                    diferença no consumo de energia da sua casa? Adotar práticas sustentáveis é
                    essencial para economizar na conta de luz e contribuir para um futuro mais sustentável.
                    Neste tópico, você aprenderá dicas valiosas para reduzir o consumo de energia, como:
                </p>

                    <CalculateProduct/>

                <p className='paragraph'>
                    Seguindo essas práticas, você não apenas economizará dinheiro, mas também ajudará a
                    preservar o meio ambiente. Vamos começar a jornada para um futuro mais sustentável e econômico!
                </p>
             <div>

                {props.pokemon}
             </div>
        </section>

    );
}

export default SectionCalculate
