import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovieReviews } from "../../movies-api";
import Loader from "../Loader/Loader";
import toast, { Toaster } from "react-hot-toast";
import { FaRegUserCircle } from "react-icons/fa";



export default function MovieReviews() {
    const [reviewsList, setReviewsList] = useState([]);
    const [loading, setLoading] = useState(false);
    const { movieId } = useParams();

    useEffect(() => {
        const getMovieReviews = async () => {
            try {
                setLoading(true);
                const data = await fetchMovieReviews(movieId);
                setReviewsList(data.results);
            } catch (error) {
                toast.error("Sorry, error occurred!")
            } finally {
                setLoading(false);
            }
        };
        getMovieReviews();
    }, [movieId]);



    return (
    <div><div><Toaster /></div>
        { loading && <Loader /> }
            {reviewsList.length > 0 && (
                <ul>
                    {reviewsList.map(({ author, content, id }) => (<li key={id}>
                        <p><FaRegUserCircle />
                            {author}</p>
                        <p>{content}</p>
                    </li>))}
                </ul>
            )}
            {reviewsList.length === 0 && <p>Sorry, no reviews found</p>}
        </div>
    )
}