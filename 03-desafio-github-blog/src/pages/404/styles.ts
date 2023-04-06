import styled from "styled-components";

export const Error404Container = styled.section`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    .card {
        background-color: ${props => props.theme['base-post']};
        padding: 90px;
        border: 0px;
        border-radius: 10px;
        margin-top: -53px;
        text-align: center;

        a {
            text-transform: uppercase;
        }
    }

`