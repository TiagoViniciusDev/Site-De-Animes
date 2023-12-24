import './Header.css'

import { FaSearch } from "react-icons/fa";

import { useContext } from 'react';
import { AnimeDataContext } from '../context/context';
import { useNavigate } from 'react-router-dom';

function Header(){

    const {searchAnime, setSearchAnime, LoadSeachData} = useContext(AnimeDataContext);

    const navigate = useNavigate()

    function goToHome(){
        navigate("/")
    }

    function goToSearch(e){
        e.preventDefault()
        LoadSeachData(searchAnime)
        navigate("/pesquisa") //Indo para pagina de pesquisa
    }
    
    return(
        <div className="Header">
            <div className='container'>
                <div className="logo" onClick={() => goToHome()}></div>
                <form className='pesquisar' onSubmit={(e) => goToSearch(e)}>
                    <input type="text" placeholder='Pesquisar anime...' required onChange={(e) => setSearchAnime(e.target.value)}/>
                    <button type='submit'>
                        <FaSearch />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Header