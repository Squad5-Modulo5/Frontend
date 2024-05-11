import "./home.css"
import Footer from "../../components/footer/footer"
import Header from "../../components/header/header"
import Presentation from "../../components/presentation/presentation"
import SectionA from "../../components/sections/sectionA.jsx";
import SectionC from "../../components/sections/sectionC.jsx";
export default function Home (){
    return(
        <div>
            <Header home={"Home"} />
            <Presentation/>
            <SectionA/>
            <SectionC/>
            <Footer/>
        </div>
    )
}