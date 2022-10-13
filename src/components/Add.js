import React, { useState } from 'react'
import { SaveInStorage } from '../helpers/SaveInStorage'

export const Add = ({setMoviesState}) => {
    const title = 'Añadir pelicula'
    
    const [movieState, setMovieState] = useState({
        id: 0,
        title: "",
        description: "",
    }
    )
    const getFormData = e => {
        e.preventDefault();
        let target = e.target;
        let title = target.title.value;
        let description = target.description.value;
        let movie = {
            id: new Date().getTime(),
            title,
            description
        }
        setMovieState(movie);

        setMoviesState(el => {
            return [...el, movie];
        })

        SaveInStorage(movie);
    }
    return (
        <div className="add" onSubmit={getFormData}>
            <h3 className="title">{title}</h3>
            <form>
                <input type="text" id="title" placeholder="Titulo" />
                <textarea id="description" placeholder="Descripción"></textarea>
                <input type="submit" id="save" value="Guardar" />
            </form>
        </div>
    )
}
