import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { Error404 } from "./pages/404/Error404";
import { Home } from "./pages/Home/Home";
import { PostBlog } from "./pages/PostBlog/PostBlog";

export function Router() {
    return (
        <Routes>
            <Route path="/">
                <Route path="/" element={<Home />}></Route>
                <Route path="/post-blog/:id" element={<PostBlog />}></Route>
                <Route path='*' element={<Error404 />}/>
            </Route>
        </Routes>
    )
}