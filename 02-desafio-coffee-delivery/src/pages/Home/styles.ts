import styled from 'styled-components';

export const HomeContainer = styled.div`
    .catalog{
        h2 {
            font-family: 'Baloo 2', sans-serif;
            font-size: 2rem;
            font-weight: 800;
            margin-bottom: 54px;
        }

        .listCatalog{
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 32px;
            text-align: center;
            row-gap: 40px;
        }
    }

`


