import {useState,useEffect} from "react";
import {useParams} from "react-router-dom";
import api from "../../services/api";
import "./filme.css";



function Filmes(){
    const {id} = useParams();
    const [filmes, setFilmes] = useState({});
    const [loading, setLoading] = useState(true);
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
                console.log("filme nao encontrado")
            })
        }
        loadFilmes()
        return () => {
            console.log("componente foi desmontado")
        }
    },[])
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
        </div>
    )
}

export default Filmes;