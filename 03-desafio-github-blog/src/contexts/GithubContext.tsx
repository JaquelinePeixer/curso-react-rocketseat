import { createContext, ReactNode, useEffect, useState } from 'react'
import { PostBlog, Profile } from '../interfaces/GithubInterface';
import { api } from '../lib/axios';

interface GithubContextType {
    dataProfile: Profile,
}

interface GithubProviderProps {
    children: ReactNode
}

export const GithubContext = createContext({} as GithubContextType);

export function GithubProvider({ children }: GithubProviderProps) {

    const [postBlog, setPostBlog] = useState<PostBlog[]>([])
    const [dataProfile, setDataProfile] = useState<Profile>({} as Profile)


    const username = "JaquelinePeixer"

    async function getProfile() {
        const response = await api.get('users/JaquelinePeixer');
        console.log(response)

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



    useEffect(() => {
        getProfile()
    }, [])


    return (
        <GithubContext.Provider value={{ dataProfile }}>
            {children}
        </GithubContext.Provider>
    )
}