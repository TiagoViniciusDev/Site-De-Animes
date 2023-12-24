import api from "../api/api";

import { createContext, useState } from "react";

export const AnimeDataContext = createContext()

export const AnimeDataProvider = ({children}) => {

    //Home
    const [homeData, setHomeData] = useState()

    async function LoadHomeData(){ //Função que puxa os dados da api
        try{
            const resposta = api.get("/anime?filter[categories]=adventure")
            setHomeData((await resposta).data)
        } 
        catch {
            console.log("ERRORRR")
        }
    }

    //Search Anime
    const [searchAnime, setSearchAnime] = useState()

    const [searchData, setSearchData] = useState()

    async function LoadSeachData(animeNome){ 
        try{
            const resposta = api.get(`/anime?filter[text]=${animeNome}`)
            setSearchData((await resposta).data)
        } 
        catch {
            console.log("ERRORRR")
        }
    }

    //AnimePage
    const [animePageData, setAnimePageData] = useState()

    async function LoadAnimePageData(id){
        try{
            const resposta = api.get(`/anime?filter[id]=${id}`)
            setAnimePageData((await resposta).data)
        } 
        catch {
            console.log("ERRORRR")
        }
    }

    const values = {
        homeData, 
        setHomeData,
        LoadHomeData, //Function

        searchAnime,
        setSearchAnime,

        searchData, 
        setSearchData,
        LoadSeachData, //Function

        animePageData,
        setAnimePageData,
        LoadAnimePageData //Function
    }

    return(
        <AnimeDataContext.Provider value={values}>{children}</AnimeDataContext.Provider>
    )
}