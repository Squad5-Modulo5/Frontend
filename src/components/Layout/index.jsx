import Footer from "../footer/footer";
import Header from "../header/header";
import { Outlet } from "react-router-dom";
export default function Layout() {

    return (
        <>
            <Header link1={`/`} link2={`/calculate`} home={"Home"} calculate={"Cauculadora"} butonlink={`/login`} name={`login`} />
            <Outlet />
            <Footer/>
        </>
    )


}