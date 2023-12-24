import Loading from './Loading'
import ContainerAnime from './ContainerAnime'

function CarregarAnimes({data}){

    return(
        <div className="CarregarAnimes">
            {data == undefined ? 
                (<Loading />) :( //Se vazio renderiza o loading, se não renderiza os dados da api
                data.data.map((anime) => (
                    <ContainerAnime
                        key={anime.id}
                        nome={anime.attributes.canonicalTitle}
                        img={anime.attributes.posterImage.large}
                        desc={anime.attributes.description}
                        nota={anime.attributes.averageRating}
                        id={anime.id}
                    /> ))
                )
            }
        </div>  
    )
}

export default CarregarAnimes