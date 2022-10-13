import React, { useEffect, useState } from 'react'
import { GetStorage } from '../helpers/GetStorage';
import { Edit } from './Edit';

export const ListOfMovies = ({moviesState, setMoviesState}) => {

    const [editState, setEditState] = useState(0);

    useEffect(() => {
        let movies = GetStorage()
        setMoviesState(movies? movies : [])
    }, [])

    const deleteMovie = (id) => {
        let storageMovies = GetStorage();
        let newMoviesList = storageMovies.filter(el => el.id !== parseInt(id));
        setMoviesState(newMoviesList? newMoviesList : []);
        localStorage.setItem("movies", JSON.stringify(newMoviesList));
    }

    return (
        <section id="content" className="content">
            {moviesState.map(movie => {
                return (
                    <article key={movie.id} className="peli-item">
                        <h3 className="title">{movie.title}</h3>
                        <p className="description">{movie.description}</p>

                        <button className="edit" onClick={() => setEditState(movie.id)}>Editar</button>
                        <button className="delete" onClick={() => deleteMovie(movie.id)}>Borrar</button>

                        {editState === movie.id && (
                            <Edit movie={movie} setMoviesState={setMoviesState} setEditState={setEditState}/>
                        )}
                    </article>
                )
            })}
        </section>
    )
}
