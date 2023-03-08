import styled from "styled-components";

export const BannerContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    padding: 94px 0;

    h2{
        margin: 16px 0 66px 0;
    }

    .listItem {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }

    .item {
        display: flex;
        align-items: center;
        gap: 12px;


        .subitem {
            border-radius: 9999px;
            padding: 8px;
            width: 32px;
            height: 32px;
        }

        .shoppingCart {
            background-color: ${props => props.theme['secondary-dark']};
        }

        .timer {
            background-color: ${props => props.theme['secondary']};
        }

        .box {
            background-color: ${props => props.theme['base-text']};
        }

        .coffee {
            background-color: ${props => props.theme['primary']};
        }
    }
`