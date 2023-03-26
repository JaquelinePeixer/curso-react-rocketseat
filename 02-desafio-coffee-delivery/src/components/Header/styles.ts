import styled from 'styled-components';

export const HeaderContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px 0;

    .logo{
        height: 40px;
        width: auto;
    }

    nav{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;
    }

    .badge{
        width: 20px;
        height: 20px;
        display: flex;
        font-size: 10px;
        justify-content: center;
        align-items: center;
        border-radius: 999px;
        background-color: ${props => props.theme['secondary']};
        color: ${props => props.theme['white']};
        float: right;
        margin-left: -9px;
        margin-top: -8px;
    }
` 