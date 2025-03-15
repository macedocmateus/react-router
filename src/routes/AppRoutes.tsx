import { Routes, Route } from "react-router";
import { Home } from "../pages/Home";
import { Products } from "../pages/Products";
import { NoteFound } from "../pages/NotFound";
import { Details } from "../pages/details";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" index element={<Home />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="*" element={<NoteFound />}></Route>
            <Route path="/details/:id" element={<Details />}></Route>
        </Routes>
    );
}
