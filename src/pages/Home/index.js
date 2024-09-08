import { useEffect,useState} from 'react';
import api from '../../services/api';
import {Link} from 'react-router-dom';
import './home.css';
function Home(){
    const [filme , setFilme] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadfilme(){
            const response = await api.get("/movie/now_playing",{
                params:{
                    api_key: "75e9e21a48c5c4bc948f590545cd0ef5",
                    language: "pt-BR",
                    page: 1,
                }
            })
            setLoading(false);
            setFilme(response.data.results.slice(0, 10))
        }

        loadfilme()


    },[])
    
    if (loading){
        return(
            <div className='loading'><h1>Carregando aguarde...</h1></div>
        )
    }
    return(
    <div className='container'>
        <div className='lista-filmes'>
            {filme.map((filmes)=>{
                return(
                    <article key={filmes.id}>
                        <strong>{filmes.title}</strong>
                        <img src={`https://image.tmdb.org/t/p/original/${filmes.poster_path}`}alt={filmes.title}/>
                        <Link to={`/filmes/${filmes.id}`}>Acessar</Link>
                    </article>
                )
            })}





        </div>
        
    </div>
)}

export default Home;