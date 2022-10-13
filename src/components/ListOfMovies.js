import React, { useEffect } from 'react'
import { GetStorage } from '../helpers/GetStorage';

export const ListOfMovies = ({moviesState, setMoviesState}) => {

    

    useEffect(() => {
        let movies = GetStorage()
        setMoviesState(movies? movies : [])
    }, [])
    return (
        <section id="content" className="content">
            {moviesState.map(movie => {
                return (
                    <article key={movie.id} className="peli-item">
                        <h3 className="title">{movie.title}</h3>
                        <p className="description">{movie.description}</p>

                        <button className="edit">Editar</button>
                        <button className="delete">Borrar</button>
                    </article>
                )
            })}
        </section>
    )
}
