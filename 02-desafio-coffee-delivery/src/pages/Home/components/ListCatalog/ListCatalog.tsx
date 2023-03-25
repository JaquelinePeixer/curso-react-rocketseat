import { AmountCart, CatalogItem } from "./styles";
import { ShoppingCart, Minus, Plus } from 'phosphor-react';
import CatalogService from '../../../../service/CatalogService.json'
import { useEffect, useState } from "react";
import { Order } from "../../../../interface/interface";

export function ListCatalog() {

    const catalogList = CatalogService

    const [listOrderDelivery, setListOrderDelivery] = useState<Order[]>([])

    function handleAddToCart(item: any) {
        let list = [...listOrderDelivery];
        let changedItem = list.find((el) => el.id === item.id)

        if (changedItem) {
            list.map(product => {
                if (product.id === item.id) {
                    product.quantity = product.quantity + 1
                }
            })

        } else {
            item.quantity = item.quantity + 1
            list.push(item)
        }
        setListOrderDelivery(list)
    }

    function handleRemoveFromCart(item: any) {
        let findItem = listOrderDelivery.find(item => item.id = item.id)
        let list = [...listOrderDelivery]

        if (findItem?.quantity && findItem?.quantity > 1) {
            list.map(resp => {
                if (resp.id === item.id) {
                    resp.quantity = item.quantity - 1

                    if (resp.quantity == 0) {
                        list = list.filter(el => el.id !== resp.id)
                    }
                }
            })
        } else {
            list = list.filter(el => el.id !== item.id)
        }

        setListOrderDelivery(list)
    }

    const totalItemDelivery = listOrderDelivery.reduce((total, current) => {
        return total + (current.price * current.quantity)
    }, 0)

    function updatedList() {
        let list = [...listOrderDelivery]

        catalogList.map(item => {
            let itemEncontrado = list.find(resp => resp.id === item.id)
            if (itemEncontrado) {
                item.quantity = itemEncontrado.quantity
            }
        })
    }

    useEffect(() => {
        updatedList()
    }, [listOrderDelivery])


    return (
        <>
            <div className="listCatalog">
                {catalogList.map(item => {
                    return (
                        <CatalogItem key={item.title}>
                            <img src={`src/assets/coffee/${item.nameImg}`} />

                            <div className="tag">
                                {item.tag.map(tag => {
                                    return <span className="itemTag" key={tag.id}>{tag.name}</span>
                                })}
                            </div>

                            <h3>{item.title}</h3>
                            <p>{item.subtitle}</p>

                            <AmountCart className="shoppingCartItemCatalog">
                                <div className="price">
                                    <label >R$</label>
                                    <label className="currency">{item.price}</label>
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
                                    <button className="btn primary">
                                        <ShoppingCart color={'white'} size={16} weight="fill" />
                                    </button>
                                </div>

                            </AmountCart>

                        </CatalogItem>
                    )
                })}
            </div>
        </>
    )
}