import { TemplateDefaultContainer } from "../../../layout/sytles"
import { FooterContainer } from "./styles"

export function Footer() {
    let year = new Date().getFullYear()

    console.log(year)

    return (
        <FooterContainer>
            <TemplateDefaultContainer>
                <label>{"@Copyright " + year + ".  Made for"} <a href="https://www.linkedin.com/in/jaquelinepeixer/" target={"_blank"}>Jaqueline Peixer</a></label>
            </TemplateDefaultContainer>
        </FooterContainer>
    )
}