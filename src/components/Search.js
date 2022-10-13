import React, { useState } from 'react'
import { GetStorage } from '../helpers/GetStorage';

export const Search = ({moviesState, setMoviesState}) => {
    const [search, setSearchState] = useState('');
    const [notFound, setNotFound] = useState(false);

    const searchMovie = (e) => {
        setSearchState(e.target.value)

        let searchResult = moviesState.filter(movie => {
            return movie.title.toLowerCase().includes(search.toLocaleLowerCase())
        }) 

        if (search.length <= 1 || searchResult <= 0) {
            searchResult = GetStorage()
            setNotFound(true)
        }else{
            setNotFound(false)
        }
        setMoviesState(searchResult)
    }
    return (
        <div className="search">
            <h3 className="title">Buscador: {search}</h3>
            {(notFound == true && search.length > 1 ) && (<h5> no se ha encontrado</h5>)}
            <form>
                <input type="text" id="search_field" 
                autoComplete='off'
                value={search}
                onChange={searchMovie}
                />
                <button id="search">Buscar</button>
            </form>
        </div>
    )
}
