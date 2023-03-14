import { AmountCart, CatalogItem } from "./styles";
import { ShoppingCart, Minus, Plus } from 'phosphor-react';
import catalog from '../../../../service/catalog.json'

export function ListCatalog() {

    let catalogList = catalog
    let quantity = 1


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
                                    <button>
                                        <Minus size={14} weight="light" />
                                    </button>
                                    <span>{quantity}</span>
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