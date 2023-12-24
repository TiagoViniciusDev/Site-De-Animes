import './Home.css'

import { useEffect } from 'react'

import CarregarAnimes from './CarregarAnimes'

import { useContext } from 'react';
import { AnimeDataContext } from '../context/context';

function Home(){

    const {homeData, LoadHomeData} = useContext(AnimeDataContext);

    useEffect(() => {
        LoadHomeData()
    },[])

    return(
        <div className="Home container">
            <CarregarAnimes data={homeData} />
        </div>
    )
}

export default Home