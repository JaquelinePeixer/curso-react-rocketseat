import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { TemplateDefault } from "./layout/templateDefault";
import { Checkout } from "./pages/Checkout/Checkout";
import { Home } from "./pages/Home/Home";
import { Success } from "./pages/Success/Success";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<TemplateDefault />}>
                <Route path="/" element={<Home />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/success" element={<Success />} />
            </Route>
        </Routes>
    )
}