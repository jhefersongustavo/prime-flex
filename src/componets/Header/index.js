import {Link} from "react-router-dom";
import "./style.css";

function Header(){
    return(
        <header>
            <Link className="titulo" to='/'><h1>PrimeFlex</h1></Link>
            <div className="menu">
            <Link to="./MeusFilmes"><button>Meus filmes</button></Link>
            </div>
        </header>
    )
}

export default Header;