import { Image, MovieWrapper } from "../styles.js";
import { Link } from "react-router-dom";

const MovieThumbnail = (props) => (

    <Link to={`/${props.id}`}>
        <MovieWrapper>

            <Image src={props.poster} />

            <div>
                <h3>{props.title}</h3>
                <h3>rating: {props.rating}</h3>
                <h3>Director:{props.director}</h3>
            </div>
        </MovieWrapper>
    </Link>
);

export default MovieThumbnail;