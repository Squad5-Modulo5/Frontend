import "./home.css"
import Footer from "../../components/footer/footer"
import Header from "../../components/header/header"
import Presentation from "../../components/presentation/presentation"

export default function Home (){
    return(
        <div>
            <Header home={"Home"} />
            <Presentation/>
            <section></section>
            <section></section>
            <section></section>
            <Footer/>
        </div>
    )
}