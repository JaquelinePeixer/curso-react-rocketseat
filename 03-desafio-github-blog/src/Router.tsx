import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { PostBlog } from "./pages/PostBlog/PostBlog";

export function Router() {
    return (
        <Routes>
            <Route path="/">
                <Route path="/" element={<Home />}></Route>
                <Route path="/post-blog" element={<PostBlog />}></Route>
            </Route>
        </Routes>
    )
}