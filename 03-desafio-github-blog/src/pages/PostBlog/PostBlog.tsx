import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { useNavigate } from "react-router-dom"
import { ContentPostBlog, HeaderPostBlog, LinkProfile, PostBlogContainer } from "./styles";
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR"
import { PostBlogUnit } from "../../interfaces/GithubInterface";

export function PostBlog() {

    const [postBlogUnit, setPostBlogUnit] = useState<PostBlogUnit>({
        url: '',
        title: '',
        user: { login: '' },
        created_at: '',
        comments: 0,
        body: '',
    })

    const params = useParams()
    const navigate = useNavigate()

    const username = "JaquelinePeixer"
    const repo = 'curso-react-rocketseat'

    async function getPostBlogIndex(id?: string) {
        await api.get(`repos/${username}/${repo}/issues/${id}`)
            .then(resp => setPostBlogUnit(resp.data))
            .catch(erro => { return navigate(`/*`); })
    }

    useEffect(() => {
        getPostBlogIndex(params.id)
        console.log(postBlogUnit)
    }, [postBlogUnit])


    return (
        <PostBlogContainer>
            <HeaderPostBlog>
                <div className="display-flex">
                    <a className="voltar">
                        <FontAwesomeIcon icon={faChevronLeft} />
                        Voltar
                    </a>
                    <a href={postBlogUnit.url} target="_blank">
                        Ver no github
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                </div>

                <h1>{postBlogUnit.title}</h1>

                <LinkProfile>
                    <p>
                        <FontAwesomeIcon icon={faGithub} />
                        {postBlogUnit.user.login}
                    </p>

                    <p>
                        <FontAwesomeIcon icon={faCalendarDay} />
                        {formatDistanceToNow(new Date(postBlogUnit.created_at), {
                            addSuffix: true,
                            locale: ptBR,
                        })}
                    </p>

                    <p>
                        <FontAwesomeIcon icon={faComment} />
                        {postBlogUnit.comments} {postBlogUnit.comments > 0 ? 'comentários' : 'comentário'}
                    </p>
                </LinkProfile>
            </HeaderPostBlog>

            <ContentPostBlog dangerouslySetInnerHTML={{ __html: postBlogUnit.body }}></ContentPostBlog>
        </PostBlogContainer>
    )
}