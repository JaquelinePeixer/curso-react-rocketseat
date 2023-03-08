import { HeaderContainer } from "./styles";
import { MapPin, ShoppingCart } from 'phosphor-react';
import { NavLink } from "react-router-dom";

export function Header() {

    let location = 'Porto Alegre, SC'

    return (
        <HeaderContainer>
            <img className="logo" src="src\assets\logo-coffee-delivery.svg" />

            <nav>
                <button title={location} className="btn light-primary">
                    <MapPin size={22} weight="fill" />  {location}
                </button>

                <NavLink className="btn light-secondary" to="/checkout">
                    <ShoppingCart size={22} />
                </NavLink>
            </nav>

        </HeaderContainer>
    )
}