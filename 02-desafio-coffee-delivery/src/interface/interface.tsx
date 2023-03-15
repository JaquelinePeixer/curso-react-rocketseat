export interface OrderList {
    order: Order[],
    andressDelivery: Adress,
    paygmentDeivery: Payment,
    deliveryTimer: string
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
    price: number
}

export interface Adress {
    zip: number,
    street: string,
    numberStreet: number,
    neighborhood: string,
    city: string,
    uf: string
    zipType: string,
    complement: string
}

export interface Payment {
    id: number,
    name: string
}
