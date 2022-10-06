import React from 'react'

export const ListOfMovies = () => {
    return (
        <section id="content" className="content">
            {/* 
            <!--aqui van las peliculas--> */}
            <article className="peli-item">
                <h3 className="title">Desarrollo web</h3>
                <p className="description">victorroblesweb.es</p>

                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>

            <article className="peli-item">
                <h3 className="title">Desarrollo web</h3>
                <p className="description">victorroblesweb.es</p>

                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>

            <article className="peli-item">
                <h3 className="title">Desarrollo web</h3>
                <p className="description">victorroblesweb.es</p>

                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>

            <article className="peli-item">
                <h3 className="title">Desarrollo web</h3>
                <p className="description">victorroblesweb.es</p>

                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>

        </section>
    )
}
