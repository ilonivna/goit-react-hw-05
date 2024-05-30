import toast, {Toaster} from "react-hot-toast";
import { searchMovieByQuery } from "../../movies-api";
import MovieList from "../../components/MovieList/MovieList";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import css from "./MoviesPage.module.css"


export default function MoviesPage() {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") ?? "";
    const [error, setError] = useState(false);



    useEffect(() => {
        if (query === "") {
            return;
        }
        setMovies([]);
        setLoading(true);
        const getMoviesByQuery = async (query) => {
            try {
                await searchMovieByQuery(query).then(data => {
                    if (!data.results.length) {
                        setLoading(false);
                        setError(true);
                        toast.error("No movies found");
                        return;
                    }
                    setError(false);
                    setMovies(data.results);
                })
            } catch (error) {
                setError(true);
                console.log(error);
                toast.error("Error! Reload the page")
            } finally {
                setLoading(false);
                setError(false);
            }
        }
        getMoviesByQuery(query);
    }, [query]);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const newQuery = form.elements.query.value.trim();
        if (!newQuery) {
            toast.error("Type a title to search");
            return;
        }
        setSearchParams({ query: newQuery });
        form.reset();

    }

    return (
        <div>
            <Toaster/>
            <h3>Search a movie by title </h3>
            <form className={css.form} onSubmit={handleSubmit}>
            <input className={css.input} type="text" name="query"
                autoFocus
                placeholder="Type your title here.." />
            <button type="submit" className={css.btn}>Search</button></form>
            {loading && <Loader />}
            {error && <p>Sorry, an error has occurred, please reload the page</p>}
            {movies.length > 0 && <MovieList movies={movies} />}
            
            
</div>
    )
}