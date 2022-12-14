import { ListOfMovies } from './components/ListOfMovies';
import { Search } from './components/Search';
import { Add } from './components/Add';
import { useState } from 'react';

function App() {
    const [moviesState, setMoviesState] = useState([])

    return (
        <div className="layout">
            {/* <!--Cabecera--> */}
            <header className="header">
                <div className="logo">
                    <div className="play"></div>
                </div>

                <h1>MisPelis</h1>
            </header>

            {/* <!--Barra de navegación--> */}
            <nav className="nav">
                <ul>
                    <li><a href="(#">Inicio</a></li>
                    <li><a href="/#">Peliculas</a></li>
                    <li><a href="/#">Blog</a></li>
                    <li><a href="/#">Contacto</a></li>
                </ul>
            </nav>

            {/* <!--Contenido principal--> */}
            <ListOfMovies moviesState= {moviesState} setMoviesState= {setMoviesState}></ListOfMovies>

            {/* <!--Barra lateral--> */}
            <aside className="lateral">
                <Search moviesState= {moviesState} setMoviesState= {setMoviesState}></Search>

                <Add setMoviesState= {setMoviesState}></Add>
            </aside>

            {/* <!--Pie de página--> */}
            <footer className="footer">
                &copy; Máster en React - <a href="https://victorroblesweb.es">victorroblesweb.es</a>
            </footer>

        </div>
    );
}

export default App;
