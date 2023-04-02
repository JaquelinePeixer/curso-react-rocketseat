import styled from "styled-components";

export const ListCardPostBlogContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;

    margin-top: 48px;
`

export const CardPostBlog = styled.div`
    background-color: ${props => props.theme['base-post']};
    padding: 32px;

    .display-flex {
        gap: 16px;
    }

    h1 {
        font-size: 1.25rem;
        font-weight: bold;
        line-height: 1.5;
    }

    span {
        flex: 1;
    }

    p{        
        margin-top: 20px;        
    }
`