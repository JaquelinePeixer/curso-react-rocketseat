import { createContext, ReactNode, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Order, OrderList } from "../interface/interface"
import CatalogService from '../service/CatalogService.json'

interface ListDeliveryContextType {
    catalogList: any,
    listOrderDelivery: any,
    finishedOrderDelivery: any,
    salveData: (dados: OrderList) => void,
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
    const [finishedOrderDelivery, setFinishedOrderDelivery] = useState({})
    const navigate = useNavigate()

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
            item.quantity = item.quantity - 1
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
    
    function salveData(dados: OrderList){
        setFinishedOrderDelivery(dados)
        navigate("/success")
    }

    useEffect(() => {
        updatedList()
    }, [listOrderDelivery, setListOrderDelivery])

    return (
        <ListDeliveryContext.Provider
            value={{ catalogList, handleAddToCart, handleRemoveFromCart, listOrderDelivery, salveData, finishedOrderDelivery }}>
            {children}
        </ListDeliveryContext.Provider>
    )
}