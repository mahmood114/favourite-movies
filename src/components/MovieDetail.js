import { useParams } from "react-router";
import { DetailWrapper } from "../styles.js";
import { Link } from "react-router-dom";

const MovieDetail = (props) => {

    const movieId = useParams().movieId;
    const movie = props.movies.find(movie => movie.id === +movieId);

    // if (!movie)
    //     return (<h1>hi</h1>)
    return (
        <DetailWrapper>
            <img src={movie.poster} />
            <p><span>{movie.title}</span></p>
            <p>Director: <span>{movie.director}</span></p>
            <p>Rating: <span>{movie.rating}</span></p>
            <p>Released: <span>{movie.released}</span></p>
            <p>Runtime: <span>{movie.runtime}</span></p>
            <p>Genre: <span>{movie.genre}</span></p>
            <p><span>{movie.plot}</span></p>
            <Link to="/">
                <button>Back</button>
            </Link>

        </DetailWrapper>
    )
}

// genre
// plot

export default MovieDetail;