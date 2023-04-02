import { useContext, useEffect } from "react"
import { GithubContext } from "../../../../contexts/GithubContext"
import { CardPostBlog, ListCardPostBlogContainer } from "./styles"
import { formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import { useNavigate } from "react-router-dom"

export function ListCardPostBlog() {

    const { postBlog } = useContext(GithubContext)
    const navigate = useNavigate()

    function gotPostBlog(idIssue: any) {
        navigate(`/post-blog/${idIssue}`)
    }

    useEffect(() => {
        // console.log(postBlog)
    }, [postBlog])

    return (
        <ListCardPostBlogContainer>
            {postBlog.map((item: any) => {
                return (
                    <CardPostBlog key={item.id} type="button" onClick={() => gotPostBlog(item.number)}>
                        <div className="display-flex">
                            <h1>{item.title}</h1>
                            <span>
                                {formatDistanceToNow(new Date(item.created_at), {
                                    addSuffix: true,
                                    locale: ptBR,
                                })}
                            </span>
                        </div>

                        <p>{item.body}</p>
                    </CardPostBlog>
                )
            })}
        </ListCardPostBlogContainer>
    )
}