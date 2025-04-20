import "./home.css"
import Presentation from "../../components/presentation/presentation"
import WhiteSection from "../../components/sections/WhiteSection.jsx";

import SectionC from "../../components/sections/sectionC.jsx";
// eslint-disable-next-line no-unused-vars
import React from "react";
import BlueSection from "../../components/sections/BlueSection.jsx";
import SectionD from "../../components/sections/SectionD.jsx";
export default function Home (){
    return(
        <>
            <div className="sections">
            <Presentation/>
            <WhiteSection/>
            <BlueSection/>
            <SectionC/>
            <SectionD/>
            </div>
           

        </>
    )
}