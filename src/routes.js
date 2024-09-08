import {Route, Routes,BrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import Filmes from "./pages/Filmes";
import Header from "./componets/Header";
import Error from "./pages/Error";

function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>;
            <Route path="/filmes/:id" element={<Filmes/>}/>;




            <Route path="*" element={<Error/>}/>;
        </Routes>
        </BrowserRouter>
    )
}
export default RoutesApp;