import { Outlet } from "react-router-dom";
import { Footer } from "../components/Header/Footer/Footer";
import { Header } from "../components/Header/Header";
import { TemplateDefaultContainer } from "./sytles";

export function TemplateDefault() {
    return (
        <>
            <TemplateDefaultContainer>
                <Header />
                <Outlet />
            </TemplateDefaultContainer>
            <Footer />
        </>
    )
}