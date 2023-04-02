import { createContext, ReactNode, useEffect, useState } from 'react'
import { PostBlog, Profile } from '../interfaces/GithubInterface';
import { api } from '../lib/axios';

interface GithubContextType {
    dataProfile: Profile,
    postBlog: any,
    postBlogLenght: number
    getPostBlog: (query?: string) => void
}

interface GithubProviderProps {
    children: ReactNode
}

export const GithubContext = createContext({} as GithubContextType);

export function GithubProvider({ children }: GithubProviderProps) {

    const [postBlog, setPostBlog] = useState<PostBlog[]>([])
    const [postBlogLenght, setPostBlogLenght] = useState<number>(0)
    const [dataProfile, setDataProfile] = useState<Profile>({} as Profile)


    const username = "JaquelinePeixer"
    const repo = 'curso-react-rocketseat'

    async function getProfile() {
        const response = await api.get(`users/${username}`);

        const newDataProfile = {
            name: response.data.name,
            avatar: response.data.avatar_url,
            description: response.data.bio,
            username: response.data.login,
            location: response.data.location,
            followers: response.data.followers,
            url: response.data.html_url
        }
        setDataProfile(newDataProfile)
    }

    async function getPostBlog(query?: string) {
        const texto = query ? query : ''
        const response = await api.get(`search/issues?q=${texto}%20repo:${username}/${repo}`);
        setPostBlogLenght(response.data.total_count)
        setPostBlog(response.data.items)
    }

    useEffect(() => {
        postBlogLenght ? postBlogLenght : 0
        getPostBlog()
        getProfile()
    }, [])


    return (
        <GithubContext.Provider value={{ dataProfile, postBlog, postBlogLenght, getPostBlog }}>
            {children}
        </GithubContext.Provider>
    )
}