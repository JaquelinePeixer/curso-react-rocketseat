import styled from "styled-components";

export const ListCardPostBlogContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;

    margin-top: 48px;
`

export const CardPostBlog = styled.button`
    background-color: ${props => props.theme['base-post']};
    padding: 32px;
    border: 0;
    border-radius: 10px;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;

    .display-flex {
        gap: 16px;
    }

    h1 {
        font-size: 1.25rem;
        font-weight: bold;
        line-height: 1.5;
    }

    span {
        line-height: 1.5;
    }

    p{        
        margin-top: 20px; 
         
        overflow: hidden; 
        text-overflow: ellipsis; 
        display: -webkit-box;
        -webkit-line-clamp: 5; 
        -webkit-box-orient: vertical; 
    }
`