export const SaveInStorage = movie => {
    let movies = JSON.parse(localStorage.getItem("movies"))

    if(Array.isArray(movies)){
        movies.push(movie);
    }else{
        movies = [movie];
    }

    localStorage.setItem("movies", JSON.stringify(movies));

    return movie;
}