import { useContext } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'
import { GithubContext } from "../../../../contexts/GithubContext";
import { SearchFormContainer } from "./styles";

const searchFormSchema = z.object({
    query: z.string()
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function SearchForm() {
    const { postBlogLenght, getPostBlog } = useContext(GithubContext)

    const { register, handleSubmit, formState: { isSubmitting } } = useForm<SearchFormInput>({
        resolver: zodResolver(searchFormSchema)
    })

    async function submitValueInput(texto: any) {
        await getPostBlog(texto.query)
    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(submitValueInput)}>
            <div className="display-flex">
                <h1>Publicações</h1>
                <span>{postBlogLenght} {postBlogLenght > 0 ? 'publicações' : 'publicação'}</span>
            </div>

            <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
        </SearchFormContainer>
    )
}