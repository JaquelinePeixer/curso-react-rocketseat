import { HomeContainer } from "./styles";
import { Banner } from "./components/Banner/Banner";
import { ListCatalog } from "./components/ListCatalog/ListCatalog";

export function Home() {
    return (
        <HomeContainer>
            <Banner></Banner>
            <section className="catalog">
                <h2>Nossos cafés</h2>
                <ListCatalog></ListCatalog>
            </section>
        </HomeContainer>
    )
}