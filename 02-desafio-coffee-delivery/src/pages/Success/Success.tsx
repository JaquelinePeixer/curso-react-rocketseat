import { Card, SuccessContainer } from "./styles";
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react';

export function Success() {

    let pedido = {
        adress: {
            zip: "60130240",
            street: "Rua João Daniel Martinelli",
            numberStreet: "102",
            neighborhood: "Farrapos",
            city: "Porto Alegre",
            uf: "SP",
            zipType: "logradouro",
            complement: "De 2 Até 1550 Lado Par"
        },
        deliveryTimer: "20min - 30min",
        payment: {
            id: 1,
            name: "Cartão de crédito"
        }
    }

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
                            <p>Entrega em <strong>{pedido.adress.street}</strong></p>
                            <p>{pedido.adress.neighborhood} - {pedido.adress.city}, {pedido.adress.uf}</p>
                        </div>
                    </div>

                    <div className="itemCard">
                        <div className="cardIcon timer">
                            <Timer size={16} weight="fill" />
                        </div>
                        <div>
                            <p>Previsão de entrega</p>
                            <p><strong>{pedido.deliveryTimer}</strong></p>
                        </div>
                    </div>

                    <div className="itemCard">
                        <div className="cardIcon currencyDollar">
                            <CurrencyDollar size={16} />
                        </div>
                        <div>
                            <p>Pagamento na entrega</p>
                            <p><strong>{pedido.payment.name}</strong></p>
                        </div>
                    </div>
                </Card>
            </div>

            <img src="src/assets/pedido-realizado.svg" alt="" />
        </SuccessContainer>
    )
}