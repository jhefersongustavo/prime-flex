import {Link} from "react-router-dom";
import "./header.css";

function Header(){
    return(
        <header>
            <Link className="titulo" to='/'><h1>PrimeFlex</h1></Link>
            <div className="menu">
            <Link className="botao" to="./pages/MeusFilmes"><button>Meus filmes</button></Link>
            </div>
        </header>
    )
}

export default Header;