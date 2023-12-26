import './ContainerAnime.css'
import { FaStar } from "react-icons/fa";

import { useContext } from 'react';
import { AnimeDataContext } from '../context/context';
import { useNavigate } from 'react-router-dom';

function ContainerAnime({nome, img, desc, nota, id}){

    const {LoadAnimePageData} = useContext(AnimeDataContext)

    const navigate = useNavigate()

    function AnimeClick(){
        scroll(0,0)
        LoadAnimePageData(id)
        navigate("/Site-De-Animes/animePage")
    }

    return(
        <div className="ContainerAnime" onClick={() => AnimeClick()}>
            <img src={img}/>
            <div className='sobre'>
                <div className='header'>
                    <h2>{nome}</h2>
                    <div className='nota'>
                        <FaStar />
                        <h3>{nota}</h3>
                    </div>
                </div>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default ContainerAnime