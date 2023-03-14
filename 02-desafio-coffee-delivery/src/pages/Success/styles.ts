import styled from "styled-components";

export const SuccessContainer = styled.section`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    .info {
    
        h1{
            font-family: 'Baloo 2', sans-serif;
            font-size: 2rem;
            font-weight: 700;
            color: ${props => props.theme['secondary-dark']};
        }
    
        p{
            color: ${props => props.theme['base-subtitle']};
            font-family: 'Roboto', sans-serif;
            font-size: 1.25rem;
            font-weight: 400;
        }
    }

    img{
        height: 293px;
        width: auto;
    }

`

export const Card = styled.div`
    border: 1px solid ${props => props.theme['secondary']};
    border-radius: 6px 36px 6px 36px;
    padding: 40px;
    margin-top: 40px;

    .itemCard {
        display: flex;
        align-items: center;
        color: ${props => props.theme['base-text']};
        font-size: 1rem;
    }

    .itemCard + .itemCard {
        margin-top: 32px;
    }

    .cardIcon{
        border-radius: 50%;
        color: ${props => props.theme['white']};
        padding: 8px;
        width: 32px;
        height: 32px;
        margin-right: 12px;

        &.pin{
            background-color: ${props => props.theme['primary']};
        }

        &.timer{
            background-color: ${props => props.theme['secondary']};
        }

        &.currencyDollar{
            background-color: ${props => props.theme['secondary-dark']};
        }
   }
`