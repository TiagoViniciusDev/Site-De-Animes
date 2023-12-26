import './Search.css'

import { useContext, useState } from 'react';
import { AnimeDataContext } from '../context/context';

import Loading from './Loading'
import CarregarAnimes from './CarregarAnimes';

function Search(){

    const {searchAnime, searchData} = useContext(AnimeDataContext);

    return(
        <div className="Search">
            {searchAnime == undefined ? (<Loading />) : (
                <CarregarAnimes data={searchData}/>
            )}
        </div>
    )
}

export default Search