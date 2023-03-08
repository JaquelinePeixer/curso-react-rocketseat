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

    button,
    input,
    textarea,
    select {
        border-radius: 6px;
        background-color: ${props => props.theme['base-button']} ;
        color: ${props => props.theme['base-label']};
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
`