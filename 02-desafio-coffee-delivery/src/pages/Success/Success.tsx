import { Card, SuccessContainer } from "./styles";
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react';
import { useContext } from "react";
import { ListDeliveryContext } from "../../contexts/ListDeliveryContext";

export function Success() {

    const { finishedOrderDelivery } = useContext(ListDeliveryContext)
    finishedOrderDelivery.deliveryTimer = "20min - 30min"

    return (
        <SuccessContainer className="section">
            <div className="info">
                <h1>Uhu! Pedido confirmado</h1>
                <p>Agora é só aguardar que logo o café chegará até você</p>

                <Card>
                    <div className="itemCard">
                        <div className="cardIcon pin">
                            <MapPin size={16} weight="fill" />
                        </div>
                        <div>
                            <p>Entrega em <strong>{finishedOrderDelivery.andressDelivery.street}, {finishedOrderDelivery.andressDelivery.numberStreet}</strong></p>
                            <p>{finishedOrderDelivery.andressDelivery.neighborhood} - {finishedOrderDelivery.andressDelivery.city}, {finishedOrderDelivery.andressDelivery.uf}</p>
                        </div>
                    </div>

                    <div className="itemCard">
                        <div className="cardIcon timer">
                            <Timer size={16} weight="fill" />
                        </div>
                        <div>
                            <p>Previsão de entrega</p>
                            <p><strong>{finishedOrderDelivery.deliveryTimer}</strong></p>
                        </div>
                    </div>

                    <div className="itemCard">
                        <div className="cardIcon currencyDollar">
                            <CurrencyDollar size={16} />
                        </div>
                        <div>
                            <p>Pagamento na entrega</p>
                            <p><strong>{finishedOrderDelivery.paygmentDelivery}</strong></p>
                        </div>
                    </div>
                </Card>
            </div>

            <img src="src/assets/pedido-realizado.svg" alt="" />
        </SuccessContainer>
    )
}