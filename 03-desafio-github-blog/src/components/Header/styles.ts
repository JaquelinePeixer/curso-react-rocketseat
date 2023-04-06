import styled from "styled-components";
import backgroundHeader from '../../assets/background-header.svg'

export const HeaderContainer = styled.section`
    background-image: url(${backgroundHeader});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 296px;

    display: flex;
    justify-content: center;
    align-items: center;
    
    img {
        width: auto;
        height: 98px;
    }
`