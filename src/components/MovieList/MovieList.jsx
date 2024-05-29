import { Link } from "react-router-dom"
    
export default function MovieList({ movies, location }) {
    const defaultImg = "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
    return (
        <ul>
            {movies.map(movie => (<li key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                    <div>
                <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : defaultImg} alt={movie.title} />
                        <p>{movie.title}</p>
                    </div>
                </Link>
            </li>))}
        </ul>
    )

}