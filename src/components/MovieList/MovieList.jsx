import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css"
    
export default function MovieList({ movies }) {
    const location = useLocation();
    const defaultImg = "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
    return (
        <ul className={css.list}>
            {movies.map(movie => (<li key={movie.id} className={css.item}>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                    <div>
                <img className={css.img} src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : defaultImg} alt={movie.title} />
                        <p>{movie.title}</p>
                    </div>
                </Link>
            </li>))}
        </ul>
    )

}