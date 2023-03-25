import { CheckoutCard, CheckoutContainer, ItemOptionPayment, OrderItem, ResumeDelivery, TotalDelivery } from "./styles";
import { CurrencyDollar, MapPinLine, CreditCard, Bank, Money, Minus, Plus, Trash } from 'phosphor-react';
import PaymentService from '../../service/PaymentService.json'
import { AmountCart } from "../Home/components/ListCatalog/styles";
import { useContext } from "react";
import { ListDeliveryContext } from "../../contexts/ListDeliveryContext";

export function Checkout() {

    const { listOrderDelivery } = useContext(ListDeliveryContext)

    const totalItemDelivery = listOrderDelivery.reduce((total, current) => {
        return total + (current.price * current.quantity)
    }, 0)

    const valueFrete = 3.5
    const valorTotalDelivery = totalItemDelivery + valueFrete

    let quantity = 1

    let listPayment = PaymentService

    let listDelivery = [
        {
            id: 1,
            nameImg: 'expresso.svg',
            tag: [
                {
                    id: 1,
                    name: 'Tradicional'
                }
            ],
            title: 'Expresso Tradicional',
            subtitle: 'O tradicional café feito com água quente e grãos moídos',
            price: 9.90
        },
        {
            id: 5,
            nameImg: 'cafe-com-leite.svg',
            tag: [
                {
                    id: 1,
                    name: 'Tradicional'
                },
                {
                    id: 2,
                    name: 'Com leite'
                }
            ],
            title: 'Café com Leite',
            subtitle: 'Meio a meio de expresso tradicional com leite vaporizado',
            price: 9.90
        }
    ]

    function onSubmit(){
        debugger
    }

    return (
        <div className="section">
            <CheckoutContainer onSubmit={onSubmit}>
                <div>
                    <h3>Complete seu pedido</h3>

                    <CheckoutCard className="adress">
                        <div className="title">
                            <div className="cardIcon pin">
                                <MapPinLine size={22} />
                            </div>
                            <div className="text">
                                <p>Endereço de Entrega</p>
                                <span>Informe o endereço onde deseja receber seu pedido</span>
                            </div>
                        </div>
                        <div className="formulary">
                            <input type="text" id="zip" className="col-4" placeholder="CEP" />

                            <input type="text" id="street" className="col-12" placeholder="Endereço" />

                            <div className="row">
                                <input type="text" id="numberStreet" className="col-4" placeholder="Número" />
                                <input type="text" id="complement" className="col-8" placeholder="Complemento" />
                            </div>

                            <div className="row">
                                <input type="text" id="neighborhood" className="col-4" placeholder="Bairro" />
                                <input type="text" id="city" className="col-6" placeholder="Cidade" />
                                <input type="text" id="uf" className="col-2" placeholder="UF" />
                            </div>
                        </div>

                    </CheckoutCard>

                    <CheckoutCard className="payment">
                        <div className="title">
                            <div className="cardIcon currencyDollar">
                                <CurrencyDollar size={22} weight="fill" />
                            </div>
                            <div className="text">
                                <p>Pagamento</p>
                                <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
                            </div>
                        </div>

                        <div className="optionPayment">
                            {listPayment.map(item => {
                                return (
                                    <ItemOptionPayment key={'option-payment-' + item.id} className="active">
                                        <div className="cardIcon">
                                            {item.name === "Cartão de crédito" && <CreditCard size={16} />}
                                            {item.name === "Cartão de débito" && <Bank size={16} />}
                                            {item.name === "Dinheiro" && <Money size={16} />}
                                        </div>
                                        <p>{item.name}</p>
                                    </ItemOptionPayment>
                                )
                            })}
                        </div>
                    </CheckoutCard>

                </div>

                <div>
                    <h3>Café selecionados</h3>

                    <CheckoutCard className="order">
                        <div className="orderList">

                            {listDelivery.map(item => {
                                return (
                                    <OrderItem key={'order-item-' + item.id}>
                                        <img src={`src/assets/coffee/${item.nameImg}`} />
                                        <div className="text">
                                            <p>{item.title}</p>
                                            <AmountCart className="shoppingCartItemCatalog">
                                                <div className="amountCart">
                                                    <div className="amount">
                                                        <button>
                                                            <Minus size={14} weight="light" />
                                                        </button>
                                                        <span>{quantity}</span>
                                                        <button>
                                                            <Plus size={14} weight="light" />
                                                        </button>
                                                    </div>
                                                    <button className="btn">
                                                        <Trash size={16} /> Remover
                                                    </button>
                                                </div>
                                            </AmountCart>
                                        </div>

                                        <AmountCart className="shoppingCartItemCatalog">
                                            <div className="price">
                                                <label className="currencyValue">R$ {item.price}</label>
                                            </div>
                                        </AmountCart>

                                    </OrderItem>
                                )
                            })}
                        </div>

                        <TotalDelivery>
                            <ResumeDelivery>
                                <p>Total de itens</p>
                                <p>{totalItemDelivery.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
                            </ResumeDelivery>

                            <ResumeDelivery>
                                <p>Entrega</p>
                                <p>{valueFrete.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
                            </ResumeDelivery>

                            <ResumeDelivery>
                                <p className="totalFinal">Total</p>
                                <p className="totalFinal">{valorTotalDelivery.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
                            </ResumeDelivery>
                        </TotalDelivery>

                        <button type="submit" className="btn secondary col-12">confirmar pedido</button>
                    </CheckoutCard>

                </div>
            </CheckoutContainer>
        </div>
    )
}