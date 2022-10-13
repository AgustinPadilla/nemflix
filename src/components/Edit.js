import React from 'react'
import { GetStorage } from '../helpers/GetStorage';

export const Edit = ({movie, setMoviesState, setEditState}) => {
    const componentTitle = "Editar pelicula";

    const setEdit = (e, id) => {
        e.preventDefault();

        let target = e.target;

        const storageMovies = GetStorage();
        const index = storageMovies.findIndex(el => el.id === id);
        let editedMovie = {
            id,
            title: target.title.value,
            description: target.description.value
        };

        storageMovies[index] = editedMovie;
        localStorage.setItem("movies", JSON.stringify(storageMovies));
        setMoviesState(storageMovies);
        setEditState(0);
    }

  return (
    <div className='edit_form'>
        <h3 className='title'>{componentTitle}</h3>
        <form onSubmit={e => setEdit(e, movie.id)}>
            <input type="text" name='title' className='edit_title' defaultValue={movie.title}></input>
            <textarea name='description' className='edit_description' defaultValue={movie.description}></textarea>
            <input type="submit" className='edit' value="actualizar"></input>
        </form>
    </div>
  )
}
