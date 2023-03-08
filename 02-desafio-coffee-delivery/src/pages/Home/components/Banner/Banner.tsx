import { BannerContainer } from "./styles";
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react';

export function Banner() {

    return (
        <BannerContainer>
            <div>
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>

                <div className="listItem">
                    <div className={`item`}>
                        <div className={`subitem shoppingCart`}>
                            <ShoppingCart color={'white'} size={16} weight="fill" />
                        </div>
                        Compra simples e segura
                    </div>

                    <div className={`item`} >
                        <div className={`subitem box`}>
                            <Package color={'white'} size={16} weight="fill" />
                        </div>
                        Embalagem mantém o café intacto
                    </div>

                    <div className={`item`}>
                        <div className={`subitem timer`}>
                            <Timer color={'white'} size={16} weight="fill" />
                        </div>
                        Entrega rápida e rastreada
                    </div>

                    <div className={`item`}>
                        <div className={`subitem coffee`}>
                            <Coffee color={'white'} size={16} weight="fill" />
                        </div>

                        O café chega fresquinho até você
                    </div>
                </div>
            </div>

            <img src="src\assets\banner-destaque-coffee.svg" />
        </BannerContainer>
    )
}