import Home from "../Home";
import "./error.css";
import { Link } from "react-router-dom";


function Error(){
    return(
    <div className="error">
        <h1> Pagina não encontrada...</h1>
        <Link to="./" className="button">Veja todos os filmes!</Link>
    </div>
)}

export default Error;