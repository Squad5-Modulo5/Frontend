import Calculatealone from "../../views/calculate/calculetealone";
import Exemplepotecia from "../../assets/image.png"
function SectionCalculate(props) {
    return (

        <section id='sectionA'>

            <div className="container">




                <h1 className='title text-center   pt-5'>
                    {props.title}

                    Calculadora: Sempre é Bom Ter o Controle
                </h1>

                <div className="row">
    <p className='paragraph col-md-7 '>
        {props.text}
        A nossa calculadora ou medidora de consumo de energia foi desenvolvida para proporcionar um controle preciso do consumo de energia de eletrodomésticos ou periféricos, permitindo que os usuários determinem quantos kWh estão sendo utilizados. Nos campos disponíveis, os usuários devem inserir as seguintes informações:
        <ul className="energy-tips-list  text-black ps-3 fw-normal text-lowercase  my-2 ms-5">
            <li>Medidas: Indique a unidade de medida desejada, por exemplo, 'kWh' (quilowatts-hora).</li>
            <li>Potência: Informe a potência do produto em watts.</li>
            <li>Duração: Especifique por quanto tempo o aparelho é utilizado diariamente.</li>
            <li>Dias: Defina por quantos dias o aparelho será utilizado.</li>
        </ul>

        <div className="row">
        <p className='paragraph col-md-7 '>
          ENCE para lâmpadas LED. Fonte: Anexo da Portaria Inmetro nº 144/2015
          </p>
         <img className="" src={Exemplepotecia} alt='pokemon-eletric2'>{props.pokemon}</img>

        </div>
    </p>
    <div className="col-md-5 ">
        <div className="text-center">
            <Calculatealone />
        </div>
        <p className='paragraph '>
            Brasil, a regulamentação que exige que os produtos informem sua potência é estabelecida pelo Instituto Nacional de Metrologia, Qualidade e Tecnologia (INMETRO). Essa exigência faz parte das regulamentações de eficiência energética, que visam garantir que os consumidores tenham acesso a informações precisas sobre o consumo de energia dos produtos que estão adquirindo
        </p>
    </div>
</div>


            </div>
        </section>

    );
}

export default SectionCalculate
