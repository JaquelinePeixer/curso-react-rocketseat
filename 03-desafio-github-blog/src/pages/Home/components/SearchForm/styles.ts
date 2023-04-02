import styled from "styled-components";

export const SearchFormContainer = styled.form`
    display: flex;
    flex-direction: column;

    input {
        flex: 1;
        background-color: ${props => props.theme['base-background']};
        border: 1px solid ${props => props.theme['base-border']};
        border-radius: 6px;
        padding: 12px 16px;
        color: ${props => props.theme['base-text']};
        outline: none;

        &::placeholder{
            color: ${props => props.theme['base-label']};
        }

        &:focus{ 
            box-shadow:  0 0 0 1px ${props => props.theme['blue']};
        }
    }
`