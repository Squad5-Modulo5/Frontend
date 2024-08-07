import Calculatealone from "../../views/calculate/calculetealone";
import "./sectionCauculate.css"





function SectionCalculate(props) {
    return (

        <section id='sectionCalculate'>

                <div id="arrowCalculate">

                    {props.arrow}
                </div>

                <h1 className='titleCalculate'>
                    {props.title}
                    <br/>
                    Calculadora: Sempre é Bom Ter o Controle
                </h1>
                <p className='paragraphCalculate'>
                    {props.text}
                    A nossa calculadora ou medidora de consumo de energia foi desenvolvida para proporcionar um controle preciso do consumo de energia de eletrodomésticos ou periféricos, permitindo que os usuários determinem quantos kWh estão sendo utilizados. Nos campos disponíveis, os usuários devem inserir as seguintes informações:

Medidas: Indique a unidade de medida desejada, por exemplo, 'kWh' (quilowatts-hora).<br></br>
Potência: Informe a potência do produto em watts.<br></br>
Duração: Especifique por quanto tempo o aparelho é utilizado diariamente.<br></br>
Dias: Defina por quantos dias o aparelho será utilizado.<br></br>

                </p>

               <Calculatealone/>

                <p className='paragraphCalculate'>
                    Brasil, a regulamentação que exige que os produtos informem sua potência é estabelecida pelo Instituto Nacional de Metrologia, Qualidade e Tecnologia (INMETRO). Essa exigência faz parte das regulamentações de eficiência energética, que visam garantir que os consumidores tenham acesso a informações precisas sobre o consumo de energia dos produtos que estão adquirindo
                </p>
             <div>

                {props.pokemon}
             </div>
        </section>

    );
}

export default SectionCalculate
