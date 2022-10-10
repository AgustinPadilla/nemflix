export const GetStorage = () => {
    let movies = JSON.parse(localStorage.getItem("movies"));

    return movies
}