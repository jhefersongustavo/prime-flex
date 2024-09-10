import {useState,useEffect} from "react";
import {useNavigate, useParams, Link} from "react-router-dom";
import api from "../../services/api";
import "./filme.css";



function Filmes(){
    const {id} = useParams();
    const [filmes, setFilmes] = useState({});
    const [loading, setLoading] = useState(true);
    const navegate = useNavigate();
    useEffect(()=>{
        async function loadFilmes(){
            await api.get(`/movie/${id}`,{
                params:{
                    api_key: "75e9e21a48c5c4bc948f590545cd0ef5",
                    language: "pt-BR",
                }
            })
            .then((response)=>{
                setFilmes(response.data);
                setLoading(false)
                console.log(response)
            })
            .catch(()=>{
                console.log("filme nao encontrado");
                navegate("/", {replace:true})
            })
        }
        loadFilmes()
        return () => {
            console.log("componente foi desmontado")
        }
    },[navegate, id])
        function salvarfilme(){
            const minhalista = localStorage.getItem("@primeflix");
            let filmesSalvos = JSON.parse(minhalista) || [];
            const hasfilmes = filmesSalvos.some((filmesalvo)=> filmesalvo.id === filmes.id);
            if(hasfilmes){
                alert("ESSE FILME ESTA NA LISTA");
                return
            }
            filmesSalvos.push(filmes);
            localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
            alert("FILME SALVADO COM SUCESSO")
        }

    if(loading){
        return(
            <div className="filme-info">
            <h1>"Carregando detalhes..."</h1>
            </div>
        )
    }
    
    return(
        <div className="filme-info">
            <h1>{filmes.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filmes.backdrop_path}`}alt={filmes.title}/>
            <h3>Sinopse</h3>
            <span>{filmes.overview}</span>
            <strong>avaliação:{filmes.vote_average.toFixed(1)}/10 </strong>
            <div className="area-buttons">
                <button className="salvar"onClick={salvarfilme}>Salvar</button>
                <button>
                     <a className="link" target="_block" href={`https://www.youtube.com/results?search_query=${filmes.title}`}>
                        Trailer
                    </a>
                    

                </button>
            </div>
        </div>
    )
}

export default Filmes;