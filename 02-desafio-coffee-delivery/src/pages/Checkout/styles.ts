import styled from "styled-components";

export const CheckoutContainer = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;    

    h3 { 
        color: ${props => props.theme['base-subtitle']};
        font-size: 1.125rem;
        font-family: 'Baloo 2', sans-serif;
        margin-bottom: 15px;
    }
`

export const CheckoutCard = styled.div`

    background-color: ${props => props.theme['base-card']};
    color: ${props => props.theme['base-text']};
    border-radius: 6px;
    padding: 40px;

    &.order{
        border-radius: 6px 44px 6px 44px;
    } 

    .currencyValue {
        font-size: 1rem;
        font-weight: bold;
        font-family: 'Roboto', sans-serif;
    }
    
    .title {
        display: flex;
        align-items: flex-start;

        .cardIcon {
            margin-right: 8px;

            &.currencyDollar {
                color: ${props => props.theme['primary']};
            }

            &.pin {
                color: ${props => props.theme['secondary-dark']};
            }
        }

        .text {
            p {
                color: ${props => props.theme['base-subtitle']};
                font-size: 1rem;
                font-weight: 500;
            }
    
            span {
                color: ${props => props.theme['base-text']};
                font-size: 0.875rem;
            }
    
        }
    
    }

    & + &{
        margin-top: 12px;
    }

    .optionPayment {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
        margin-top: 32px;
    }

    .row {
        display: flex;
        gap: 12px;
    }

`

export const OrderItem = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;

    padding-bottom: 24px;
    border-bottom: 1px solid ${props => props.theme['base-button']};

    & + & {
        padding-top: 24px;
    }

    img {
        width: 64px;
        height: 64px;
        object-fit: contain;
    }

    .text {
        flex: 1;

        p{
            margin-bottom: 8px;
        }
    }

    button{
        background-color: ${props => props.theme['base-button']};
    }
`

export const TotalDelivery = styled.div`

    padding-top: 24px;

    & + button{
        margin-top: 24px;
        text-transform: uppercase;
        padding: 12px; 
    }
`

export const ItemOptionPayment = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    font-size: 0.75rem;
    text-transform: uppercase;
    background-color: ${props => props.theme['base-button']};
    color: ${props => props.theme['base-text']};
    border: 1px solid ${props => props.theme['base-button']};
    border-radius: 6px;

    .cardIcon {
        color: ${props => props.theme['primary']};
    }

    &.active{
        background-color: ${props => props.theme['primary-light']};
        border-color: ${props => props.theme['primary']};
    }
`

export const ResumeDelivery = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 12px;

    p {
        font-size: 0.875rem;
        color: ${props => props.theme['base-text']};
    }

    .totalFinal {
        font-weight: bold;
        font-size: 1.25rem;
    }

`