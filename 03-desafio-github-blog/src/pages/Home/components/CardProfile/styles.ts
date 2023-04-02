import styled from "styled-components";

export const CardProfilecontainer = styled.div`
    padding: 32px 40px;
    background-color: ${props => props.theme['base-profile']};
    margin-top: -58px;
    display: flex;
    gap: 32px;
    margin-bottom: 75px;

    img{
        width: 148px;
        height: 148px;
        border-radius: 8px;
        object-fit: cover;
    }

`

export const ContentProfile = styled.div`
    flex: 1;

    display: flex;
    flex-direction: column;

    .display-flex{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .flex-1{
        flex: 1;
    }

    .title{
        font-size: 1.5rem;
    }

    p {
        color: ${props => props.theme['base-text']};
    }

    a {
        text-transform: uppercase;

        svg {
            margin-left: 8px;
        }
    }
`

export const LinkProfile = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 24px;

    svg {
        margin-right: 8px;
        color: ${props => props.theme['base-label']};
    }

`