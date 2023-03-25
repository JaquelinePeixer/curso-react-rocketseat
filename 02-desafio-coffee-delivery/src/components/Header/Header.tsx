import { HeaderContainer } from "./styles";
import { MapPin, ShoppingCart } from 'phosphor-react';
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ListDeliveryContext } from "../../contexts/ListDeliveryContext";

export function Header() {

    const { listOrderDelivery } = useContext(ListDeliveryContext)

    let location = 'Porto Alegre, SC'

    return (
        <HeaderContainer >
            <NavLink to="/" title="Ir para página inicial">
                <img className="logo" src="src\assets\logo-coffee-delivery.svg" />
            </NavLink>


            <nav>
                <button title={location} className="btn light-primary">
                    <MapPin size={22} weight="fill" />  {location}
                </button>

                <NavLink className="btn light-secondary" to="/checkout"  title="Ir para carrinho de compras">
                    <ShoppingCart size={22} />
                </NavLink>
            </nav>

        </HeaderContainer>
    )
}