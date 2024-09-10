import "./style.css";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
function MeusFilmes(){
    const [mostrarOpcoes, setMostrarOpcoes] = useState(false);
    const [filmes,setFilmes] = useState([]);
    

    useEffect(()=>{
        const minhalista = localStorage.getItem("@primeflix");
        setFilmes(JSON.parse(minhalista) || [])
    },[])
        function excluirfilme(id){
            let filtrofilmes = filmes.filter((item)=>{
                return (item.id !== id)
            })

            setFilmes(filtrofilmes)
            localStorage.setItem("@primeflix", JSON.stringify(filtrofilmes))
        }


          

    return(
        <div className="titulo-info">
            <h1 className="h1">Meus filmes salvos</h1>
            
                {filmes.map((item)=>{
                    return(
                        <div key={item.id} className="teste">
                        <ul className="menu">
                            <li className="dropdown">
                                <button className="botao">{item.title}</button>
                                <div className="dropdown-menu">
                                    <button onClick={()=>excluirfilme(item.id)}>Excluir</button>
                                    <Link className="link" to={`../filmes/${item.id}`}>Home</Link>
                                </div>
                            </li>
                        </ul>
                            

                            
                            




                        </div>
                        
                    
                        
                    )
                })}
            
        </div>
    )
}


export default MeusFilmes;
