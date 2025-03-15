import { Routes, Route } from "react-router";
import { Home } from "../pages/Home";
import { Products } from "../pages/Products";
import { NoteFound } from "../pages/NotFound";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" index element={<Home />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="*" element={<NoteFound />}></Route>
        </Routes>
    );
}
