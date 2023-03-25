import { createContext, ReactNode, useEffect, useState } from "react"
import { Order } from "../interface/interface"
import CatalogService from '../service/CatalogService.json'

interface ListDeliveryContextType {
    catalogList: any,
    listOrderDelivery: Order[],
    handleAddToCart: (item: any) => void,
    handleRemoveFromCart: (item: any) => void
}

export const ListDeliveryContext = createContext({} as ListDeliveryContextType)

interface ListDeliveryProviderProps {
    children: ReactNode
}

export function ListDeliveryContextProvider({ children }: ListDeliveryProviderProps) {

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
        debugger
        if (findItem?.quantity && findItem?.quantity > 1) {
            list.map(resp => {
                if (resp.id === item.id) {
                    resp.quantity = item.quantity - 1
                    debugger
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
    }, [listOrderDelivery, setListOrderDelivery])

    return (
        <ListDeliveryContext.Provider 
        value={{ catalogList, handleAddToCart, handleRemoveFromCart, listOrderDelivery }}>
            {children}
        </ListDeliveryContext.Provider>
    )
}