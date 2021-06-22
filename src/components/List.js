import data from "../movies.js";
import MovieThumbnail from "./MovieItem.js";
import { ListWrapper } from "../styles.js"

const List = () => {

  const movies = data.map(movie => (
    <MovieThumbnail
      id={movie.id}
      poster={movie.poster}
      title={movie.title}
      rating={movie.rating}
      director={movie.director}
    />
  ));

  return <ListWrapper>{movies}</ListWrapper>;
}

export default List;