import { CheckoutCard, CheckoutContainer, ItemOptionPayment, OrderItem, ResumeDelivery, TotalDelivery } from "./styles";
import { CurrencyDollar, MapPinLine, CreditCard, Bank, Money, Minus, Plus } from 'phosphor-react';
import PaymentService from '../../service/PaymentService.json'
import { AmountCart } from "../Home/components/ListCatalog/styles";
import { useContext } from "react";
import { ListDeliveryContext } from "../../contexts/ListDeliveryContext";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

const newOrderDeliveryValidationSchema = zod.object({
    zip: zod.string().min(6, { message: "Informe o CEP!" }),
    street: zod.string().min(1, "Informe o endereço!"),
    numberStreet: zod.string().min(1, "Informe o número de sua residência!"),
    neighborhood: zod.string().min(1, "Informe o bairro!"),
    city: zod.string().min(1, "Informe a cidade!"),
    uf: zod.string().min(1, "Informe o estado!").max(2, "Máximo 2 caracteres"),
    complement: zod.string().min(1, "Ajude a encontrar sua casa. Informe um complemento!"),
    payment: zod.string(),
})

export function Checkout() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: zodResolver(newOrderDeliveryValidationSchema)
    })

    const { listOrderDelivery, handleAddToCart, handleRemoveFromCart, salveData } = useContext(ListDeliveryContext)

    const totalItemDelivery = listOrderDelivery.reduce((total: any, current: any) => {
        return total + (current.price * current.quantity)
    }, 0)

    const valueFrete = 3.5
    const valorTotalDelivery = totalItemDelivery + valueFrete

    let listPayment = PaymentService

    function onSubmitDeliveryOrder(data: any) {
        let order = {
            id: new Date().getTime(),
            order: listOrderDelivery,
            andressDelivery: {
                zip: data.zip,
                street: data.street,
                numberStreet: data.numberStreet,
                neighborhood: data.neighborhood,
                city: data.city,
                uf: data.uf,
                complement: data.complement
            },
            paygmentDelivery: data.payment,
        }
        salveData(order)
    }

    return (
        <div className="section">
            <CheckoutContainer onSubmit={handleSubmit(onSubmitDeliveryOrder)}>

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

                            <input type="text" id="zip" className="col-4" placeholder="CEP" {...register('zip')} />

                            <input type="text" id="street" className="col-12" placeholder="Endereço" {...register('street')} />

                            <div className="row">
                                <input type="text" id="numberStreet" className="col-4" placeholder="Número" {...register('numberStreet')} />
                                <input type="text" id="complement" className="col-8" placeholder="Complemento" {...register('complement')} />
                            </div>

                            <div className="row">
                                <input type="text" id="neighborhood" className="col-4" placeholder="Bairro" {...register('neighborhood')} />
                                <input type="text" id="city" className="col-6" placeholder="Cidade" {...register('city')} />
                                <input type="text" id="uf" className="col-2" placeholder="UF" {...register('uf')} />
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
                                    <ItemOptionPayment key={'option-payment-' + item.id} className={watch('payment') === item.name ? 'active' : ''}>
                                        <input type="radio" value={item.name} {...register("payment")} hidden />
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

                            {listOrderDelivery.map((item: any) => {
                                return (
                                    <OrderItem key={'order-item-' + item.id}>
                                        <img src={`src/assets/coffee/${item.nameImg}`} />
                                        <div className="text">
                                            <p>{item.title}</p>
                                            <AmountCart className="shoppingCartItemCatalog">
                                                <div className="amountCart">
                                                    <div className="amount">
                                                        <button onClick={() => handleRemoveFromCart(item)} type="button" title={'Remover ' + item.title} >
                                                            <Minus size={14} weight="light" />
                                                        </button>
                                                        <span>{item.quantity}</span>
                                                        <button onClick={() => handleAddToCart(item)} type="button" title={'Adicionar ' + item.title}>
                                                            <Plus size={14} weight="light" />
                                                        </button>
                                                    </div>

                                                </div>
                                            </AmountCart>
                                        </div>

                                        <AmountCart className="shoppingCartItemCatalog">
                                            <div className="price">
                                                <label className="currencyValue">R$ {(item.price * item.quantity).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</label>
                                            </div>
                                        </AmountCart>

                                    </OrderItem>
                                )
                            })}
                        </div>

                        <TotalDelivery>
                            <ResumeDelivery>
                                <p>Total de itens</p>
                                <p>{totalItemDelivery.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                            </ResumeDelivery>

                            <ResumeDelivery>
                                <p>Entrega</p>
                                <p>{valueFrete.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                            </ResumeDelivery>

                            <ResumeDelivery>
                                <p className="totalFinal">Total</p>
                                <p className="totalFinal">{valorTotalDelivery.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                            </ResumeDelivery>
                        </TotalDelivery>

                        <button type="submit" className="btn secondary col-12">confirmar pedido</button>
                    </CheckoutCard>

                </div>
            </CheckoutContainer >
        </div >
    )
}