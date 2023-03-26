import { AmountCart, CatalogItem } from "./styles";
import { ShoppingCart, Minus, Plus } from 'phosphor-react';
import { useContext } from "react";
import { ListDeliveryContext } from "../../../../contexts/ListDeliveryContext";
import { NavLink } from "react-router-dom";

export function ListCatalog() {

    const { catalogList, handleAddToCart, handleRemoveFromCart } = useContext(ListDeliveryContext)

    return (
        <>
            <div className="listCatalog">
                {catalogList.map((item: any) => {
                    return (
                        <CatalogItem key={item.title}>
                            <img src={`src/assets/coffee/${item.nameImg}`} />

                            <div className="tag">
                                {item.tag.map((tag: any) => {
                                    return <span className="itemTag" key={tag.id}>{tag.name}</span>
                                })}
                            </div>

                            <h3>{item.title}</h3>
                            <p>{item.subtitle}</p>

                            <AmountCart className="shoppingCartItemCatalog">
                                <div className="price">
                                    <label >R$</label>
                                    <label className="currency">{item.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</label>
                                </div>

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
                                    <NavLink className="btn primary" to="/checkout" title="Ir para carrinho de compras">
                                        <ShoppingCart color={'white'} size={16} weight="fill" />
                                    </NavLink>
                                </div>
                            </AmountCart>
                        </CatalogItem>
                    )
                })}
            </div>
        </>
    )
}