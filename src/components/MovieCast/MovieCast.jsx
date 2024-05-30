import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieCredits } from "../../movies-api";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../Loader/Loader";
import css from "./MovieCast.module.css"

export default function MovieCast() {
    const [loading, setLoading] = useState(false);
    const [castList, setCastList] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        const getMovieCast = async () => {
            try {
                setLoading(true);
                const data = await fetchMovieCredits(movieId);
                setCastList(data.cast);
            } catch (error) {
                console.log(error)
                toast.error("Sorry, error occurred!")
            } finally {
                setLoading(false);
            }
        };
        getMovieCast();
    }, [movieId]);

    const defaultImg = "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg";
    
    return (
        <div>
            <div><Toaster /></div>
            <ul className={css.list}>
                {loading && <Loader />}
                {castList.length > 0 && (castList.map(({ id, name, profile_path, character }) => (
                    <li className={css.item} key={id}>
                        <img className={css.img} src={profile_path ? `https://image.tmdb.org/t/p/w200${profile_path}` : defaultImg} alt={name} loading="lazy" width="140" />
                        <h4>{name}</h4>
                        <p>Character: {character}</p>
                    </li>
                )))}
            </ul>
            {castList.length === 0 && <p>Sorry, no cast found</p>}
        </div>
    )
}