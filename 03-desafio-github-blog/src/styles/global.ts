import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
    }

    body, input {
        font-family: 'Nunito', sans-serif;
        background-color: ${props => props.theme['base-background']};
        color: ${props => props.theme['base-subtitle']};
        line-height: 2;
        font-size: 1rem;
    }

    a {
        color: ${props => props.theme['blue']};
        font-weight: bold;
        font-size: 0.75rem;
        text-decoration: none;

        &:hover{
            text-decoration: underline;
            cursor: pointer;
        }
    }

    .title {
        color: ${props => props.theme['base-title']};
        font-size: 1.25rem;
        font-weight: bold;
    }

    span {
        color: ${props => props.theme['base-span']};
        font-size: 0.875rem;
    }
    
    .content {
        color: ${props => props.theme['base-text']};
    }

    .display-flex {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

`