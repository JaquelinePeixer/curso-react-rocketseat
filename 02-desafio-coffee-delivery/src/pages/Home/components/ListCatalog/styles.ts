import styled from "styled-components"

export const CatalogItem = styled.div`
    background-color: ${props => props.theme['base-card']};
    color: ${props => props.theme['base-text']};
    border-radius: 6px 36px 6px 36px;
    padding: 20px;

    img {
        margin-top: -40px;
        margin-bottom: 12px;
    }

    .tag {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        margin-bottom: 16px;
    }

    .itemTag {
        background-color: ${props => props.theme['secondary-light']};
        color: ${props => props.theme['secondary-dark']};
        padding: 4px 8px;
        border-radius: 100px;
        font-weight: 500;
        font-family: 'Roboto';
    }

    h3 {
        font-family: 'Baloo 2', sans-serif;
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: 8px;
    }

    p {
        font-family: 'Roboto', sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        margin-bottom: 33px;
    }
   
`

export const AmountCart = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .price {
        color: ${props => props.theme['base-text']}
        font-size: 0.875rem;

        .currency {
            font-family: 'Baloo 2', sans-serif;            
            font-weight: 800;
            font-size: 1.5rem;
            margin-left: 3px;
        }
    }

    .amountCart {
        display: flex;
        gap: 8px;
        justify-content: center;
        align-items: center;

        .amount{
            background-color: ${props => props.theme['base-button']};
            color: ${props => props.theme['base-title']};
            border: 0px;
            border-radius: 6px;
            display: flex;
            gap: 5px;
            align-items: center;
            padding: 8px;
            height: 32px;

            button {                
                border: 0;
                padding: 2px 4px;
                color: ${props => props.theme['primary']};
                display: flex;
                align-items: center;
            }
        }
    }

`