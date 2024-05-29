import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchTrendingMovies } from "../../movies-api";
import iziToast from "izitoast";
import Loader from "../../components/Loader/Loader";
import { useLocation } from "react-router-dom";

export default function HomePage() {

    const [trendingMovies, setTrendingMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        async function getTrendingMovies() {
            setLoading(true);
            try {
                const data = await fetchTrendingMovies();
                setTrendingMovies(data.results);
            } catch (error) {
                iziToast.error({
                    title: 'Error',
                    message: 'Error occured, please, reload the page',
                })
            } finally {
                setLoading(false);
            }
        }
        getTrendingMovies();
    }, []);
    


    return (
        <div>
            <h1>Trending today</h1>
            <MovieList movies={trendingMovies} location={location} />
            {loading && <Loader/>}
        </div>
    )
}