import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Player from "pages/Player";
import NotFound from "pages/NotFound";
import BasePage from "pages/BasePage";

function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BasePage />} >
                    <Route index element={<Home />} />
                    <Route path="favorites" element={<Favorite />} />
                    <Route path=":id" element={<Player />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;