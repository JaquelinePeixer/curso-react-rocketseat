export interface PostBlog {
    title: string,
    content: string,
    createdAt: string,
    user: Profile,
    url: string,
    comments: number 
}

export interface Profile {
    name: string,
    avatar: string,
    description: string,
    username: string,
    location: string,
    followers: number,
    url: string
}