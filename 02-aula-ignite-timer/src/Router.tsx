import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout/DefaultLayout";
import { History } from "./pages/History/History";
import { Home } from "./pages/Home/Home";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />}></Route>
                <Route path="/history" element={<History />}></Route>
            </Route>
        </Routes>
    );
}