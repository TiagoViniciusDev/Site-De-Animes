import './AnimePage.css'

import { useContext } from 'react';
import { AnimeDataContext } from '../context/context';

import Loading from './Loading';

import { FaStar } from "react-icons/fa";

function AnimePage(){

    const {animePageData} = useContext(AnimeDataContext)

    return(
        <div className="AnimePage">
            {animePageData == undefined ? 
                (<Loading />) :( //Se vazio renderiza o loading, se não renderiza os dados da api
                animePageData.data.map((anime) => (
                        <div className='Anime' key={anime.id}>
                            <img src={anime.attributes.coverImage.large}/>
                            <div className='animeConteudo container'>
                                <img src={anime.attributes.posterImage.large}/>
                                <div className='sobre'>
                                    <div className='header'>
                                            <h2>{anime.attributes.canonicalTitle}</h2>
                                            <div className='nota'>
                                                <FaStar />
                                                <h3>{anime.attributes.averageRating}</h3>
                                            </div>
                                    </div>
                                    <p>{anime.attributes.synopsis}</p>
                                </div>   
                            </div>
                            <iframe src={`https://www.youtube.com/embed/${anime.attributes.youtubeVideoId}`} title={`trailer ${anime.attributes.canonicalTitle}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                        </div>
                        
                    ))
                )
            }
        </div>
    )
}

export default AnimePage