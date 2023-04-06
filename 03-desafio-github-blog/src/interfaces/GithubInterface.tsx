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

export interface Issues {
    items: any,
    total_count: number
}

export interface PostBlogUnit {
    url: string,
    title: string,
    user: { login: string },
    created_at: string,
    comments: number,
    body: string,
}