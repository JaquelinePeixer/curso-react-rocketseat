import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body,
    input,
    button,
    textarea {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        line-height: 1.3;
    }

    button {
        border-radius: 6px;
        background-color: ${props => props.theme['base-button']} ;
        color: ${props => props.theme['primary']};
    }

    input,
    textarea,
    select {
        border-radius: 6px;
        background-color: ${props => props.theme['base-input']} ;
        color: ${props => props.theme['base-label']};
        outline: none;
        border: 1px solid ${props => props.theme['base-button']};
        padding: 12px;
        margin-top: 16px;    

        &:focus {
            border: 1px solid ${props => props.theme['secondary-dark']};            
        }
    }

    h1{
        color: ${props => props.theme['base-title']};
        font-weight: 700;
        font-size: 3rem;
    }

    h2{
        color: ${props => props.theme['base-subtitle']};
        font-weight: 400;
        font-size: 1.25rem;
    }

    .btn{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8px;
        gap: 4px;
        border: 0;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 0.875rem;
        border-radius: 6px;
        transition: backgroundColor 2s linear 1s;

        &:hover{
            cursor: pointer;
        }
    }

    .btn.primary {
        background-color: ${props => props.theme['primary-dark']};
        color: ${props => props.theme['base-card']};
    
        &:hover {
            background-color: ${props => props.theme['primary']};
            color: ${props => props.theme['base-card']};
        }
    }
    
    .btn.secondary {
        background-color: ${props => props.theme['secondary']};
        color: ${props => props.theme['white']};
    
        &:hover {
            background-color: ${props => props.theme['secondary-dark']};
            color: ${props => props.theme['white']};
        }
    }
    
    .btn.light-primary {
        background-color: ${props => props.theme['primary-light']};
        color: ${props => props.theme['primary-dark']};
    
        &:hover {
            background-color: ${props => props.theme['primary-dark']};
            color: ${props => props.theme['white']};
        }
    }
    
    .btn.light-secondary {
        background-color: ${props => props.theme['secondary-light']};
        color: ${props => props.theme['secondary-dark']};
    
        &:hover {
            background-color: ${props => props.theme['secondary']};
            color: ${props => props.theme['white']};
        }
    }

    .col-12 {
        width: 100%
    }

    .col-11 {
        width: 91.6%
    }

    .col-10 {
        width: 83.3%
    }

    .col-9 {
        width: 75%
    }

    .col-8 {
        width: 66.6%
    }

    .col-7 {
        width: 58.3%
    }

    .col-6 {
        width: 50%
    }

    .col-5 {
        width: 41.6%
    }

    .col-4 {
        width: 33.3%
    }

    .col-3 {
        width: 25%
    }

    .col-2 {
        width: 16.6%
    }

    .col-1 {
        width: 8.3%
    }
    
    .section{
        margin-top: 40px;
    }
    
`