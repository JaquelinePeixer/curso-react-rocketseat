import { Header } from "../../components/Header/Header";
import { Summary } from "../../components/Summary/Summary";
import { SearchForm } from "./components/SearchForm/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";


export function Transactions() {
    return (
        <>
            <Header />
            <Summary />

            <TransactionsContainer>
                <SearchForm />

                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td>Desenvolvimento de site</td>
                            <td>
                                <PriceHighlight variant="income">
                                    R$ 12.000,00
                                </PriceHighlight>
                            </td>
                            <td>Vendas</td>
                            <td>13/04/2022</td>
                        </tr>
                        <tr>
                            <td>Hamburguer</td>
                            <td>
                                <PriceHighlight variant="outcome">
                                    - R$ 59,00
                                </PriceHighlight>
                            </td>
                            <td>Alimentação</td>
                            <td>10/04/2022</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </>
    )
}