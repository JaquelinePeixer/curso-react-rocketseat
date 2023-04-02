import styled from "styled-components";

export const PostBlogContainer = styled.div`
    width: 864px;
    margin: 0 auto;
`
export const HeaderPostBlog = styled.div`
    padding: 32px 40px;
    background-color: ${props => props.theme['base-profile']};
    margin-top: -58px;

    a {
        text-transform: uppercase;

        svg {
            margin-left: 8px;
        }

        &.voltar svg{
            margin-right: 8px;
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

export const ContentPostBlog = styled.div`
    padding: 32px 40px;
    color: ${props => props.theme['base-text']};
`