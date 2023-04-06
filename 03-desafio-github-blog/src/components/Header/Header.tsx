import { HeaderContainer } from "./styles";
import logo from '../../assets/Logo.svg';
import { Link } from "react-router-dom";

export function Header() {
    return (
        <HeaderContainer>
            <Link to="/" title="ir para página inicial">
                <img src={logo} alt="" />
            </Link>
        </HeaderContainer>
    )
}