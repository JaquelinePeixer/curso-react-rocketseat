import { CardProfile } from "./components/CardProfile/CardProfile";
import { ListCardPostBlog } from "./components/ListCardPostBlog/ListCardPostBlog";
import { SearchForm } from "./components/SearchForm/SearchForm";
import { HomeContainer } from "./styles";


export function Home() {
    return (
        <HomeContainer>
            <CardProfile />
            <SearchForm />
            <ListCardPostBlog />           
        </HomeContainer>
    )
}