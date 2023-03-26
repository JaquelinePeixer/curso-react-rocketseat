export interface OrderList {
    id: number,
    order: Order[],
    andressDelivery?: Adress,
    paygmentDelivery?: string,
    deliveryTimer?: string
}

export interface Order {
    id: number,
    nameImg: string,
    tag: [
        {
            id: number,
            name: string
        }
    ],
    title: string,
    subtitle: string,
    price: number,
    quantity: number
}

export interface Adress {
    zip: number,
    street: string,
    numberStreet: number,
    neighborhood: string,
    city: string,
    uf: string
    complement: string
}

export interface Payment {
    id: number,
    name: string
}
