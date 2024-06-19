import "./home.css"
import Footer from "../../components/footer/footer"
import Header from "../../components/header/header"
import Presentation from "../../components/presentation/presentation"
import SectionA from "../../components/sections/sectionA.jsx";

import SectionC from "../../components/sections/sectionC.jsx";
// eslint-disable-next-line no-unused-vars
import React from "react";
import SectionB from "../../components/sections/SectionB.jsx";
import SectionD from "../../components/sections/SectionD.jsx";
export default function Home (){
    return(
        <>
            <Header link1={`/`} link2={`/calculate`} home={"Home"} calculate={"Cauculadora"} butonlink={`/login`} name={`login`}/>
            <div className="sections">
            <Presentation/>
            <SectionA/>
            <SectionB/>
            <SectionC/>
            <SectionD/>
            </div>
            <Footer/>

        </>
    )
}