import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: ${props => props.theme['base-card']}; 
    margin-top: 87px;
    padding: 30px;
    color: ${props => props.theme['base-title']};
    text-align: center;
    font-size: 0.875rem;

    a {
        color: ${props => props.theme['base-title']};

        &:hover{
            cursor: point;
            color: ${props => props.theme['primary']};
        }
    }

`