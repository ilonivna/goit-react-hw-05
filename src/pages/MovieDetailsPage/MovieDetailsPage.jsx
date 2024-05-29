import { fetchMovieDetails } from "../../movies-api";
import { useEffect, useState, Suspense, useRef  } from "react";
import Loader from "../../components/Loader/Loader";
import toast, { Toaster } from "react-hot-toast";
import clsx from "clsx";
import { Link, NavLink, useLocation, useParams, Outlet } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import css from "./MovieDetailsPage.module.css"



export default function MovieDetailsPage() {
    const [movieDetails, setMovieDetails] = useState([]);
    const movieId = useParams();
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const backLinkRef = useRef(location.state ?? "/movies")
    
    useEffect(() => {
        const getMovieDetails = async () => {
            try {
                setLoading(true);
                const data = await fetchMovieDetails(movieId);
                setMovieDetails(data);
            } catch (error) {
                toast.error("Error occurred, reload the page")
            } finally {
                setLoading(false);
            }
        }
        getMovieDetails();
    }, [movieId]);

    const getLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.isActive)
}
    const { original_title, overview, genres, poster_path, vote_average } = movieDetails;
    const scoreToFixed = Number(vote_average).toFixed(2);
    const defaultImg = "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg";

    return (
        <div>
            <div><Toaster /></div>
            <Link to={backLinkRef.current}><IoArrowBackSharp />
                Go back</Link>
            
            {loading && <Loader />}
            <div className={css["info-container"]}>
                <div>
                    <img src={poster_path ? `https://image.tmdb.org/t/p/w300${poster_path}`
: defaultImg} loading="lazy" alt="Poster" />
                </div>
                <div>
                    <h2>{original_title}</h2>
                    <p>User score: {scoreToFixed}</p>
                    <h4>Overview</h4>
                    <p>{overview}</p>
                    <h4>Genres</h4>
                    <ul>
                        {genres && genres.length && genres.map(({ id, name })=> <li key={id}>{name}</li>)}
                    </ul>
                </div>
            </div>


            <ul>
                <li>
                    <NavLink to="cast">Cast</NavLink>
                </li>
                <li>
                    <NavLink to="reviews">Reviews</NavLink>
                </li>
            </ul>

            <Suspense fallback={<Loader />}>
                <Outlet/>
            </Suspense>
        </div>
    )
}