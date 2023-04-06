import { Link } from "react-router-dom";
import { Error404Container } from "./styles";

export function Error404() {
    return (
        <Error404Container>
            <div className="card">
                <h1>Algo de errado aconteceu</h1>
                <Link to="/">Voltar para página inicial</Link>
            </div>
        </Error404Container>
    )
}