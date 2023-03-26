import { HeaderContainer } from "./styles";
import { MapPin, ShoppingCart } from 'phosphor-react';
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ListDeliveryContext } from "../../contexts/ListDeliveryContext";

export function Header() {

    const { finishedOrderDelivery, listOrderDelivery } = useContext(ListDeliveryContext)

    const [amountBadge, setAmountBadge] = useState(0)

    let location: string

    if (finishedOrderDelivery?.andressDelivery) {
        location = `${finishedOrderDelivery.andressDelivery.city}/${finishedOrderDelivery.andressDelivery.uf}`
    } else {
        location = 'A definir'
    }

    function atualizarBadge() {
        let dados = 0
        listOrderDelivery.map((item: any) => {
            dados = dados + item.quantity
        })
        setAmountBadge(dados)
    }

    useEffect(() => {
        atualizarBadge()
    }, [listOrderDelivery])

    return (
        <HeaderContainer >
            <NavLink to="/" title="Ir para página inicial">
                <img className="logo" src="src\assets\logo-coffee-delivery.svg" />
            </NavLink>

            <nav>
                <button title={location} className="btn light-primary">
                    <MapPin size={22} weight="fill" />  {location}
                </button>

                <div>
                    <span className="badge">{amountBadge}</span>
                    <NavLink className="btn light-secondary" to="/checkout" title="Ir para carrinho de compras">
                        <ShoppingCart size={22} />
                    </NavLink>
                </div>
            </nav>

        </HeaderContainer>
    )
}