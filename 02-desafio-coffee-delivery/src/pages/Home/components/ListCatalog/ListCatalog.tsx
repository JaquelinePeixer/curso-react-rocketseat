import { AmountCart, CatalogItem } from "./styles";
import { ShoppingCart, Minus, Plus } from 'phosphor-react';
import CatalogService from '../../../../service/CatalogService.json'
import { useEffect, useState } from "react";
import { Order, OrderList } from "../../../../interface/interface";

export function ListCatalog() {

    let catalogList = CatalogService

    const [listOrderDelivery, setListOrderDelivery] = useState([])


    function addOrder(item: any) {

        // let newList = listOrderDelivery.push(item)
        // setListOrderDelivery(newList)

        setListOrderDelivery(newList => [...newList, item])

        console.log('addOrder', listOrderDelivery)
        debugger
    }

    function removeOrder(item: any) {
        console.log('removeOrder', listOrderDelivery)
    }

    function salveLocalStorage(data: any) {
        const stateJson = JSON.stringify(data)
        localStorage.setItem('@coffe-delivery-order', stateJson)
    }

    return (
        <div className="listCatalog">
            {catalogList.map(item => {
                return (
                    <CatalogItem key={item.id}>
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
                                    <button onClick={() => removeOrder(item)} type="button" >
                                        <Minus size={14} weight="light" />
                                    </button>
                                    <span>{listOrderDelivery.length}</span>
                                    <button>
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
    )
}