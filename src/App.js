import { Title, GlobalStyle } from "./styles.js";
import './App.css';
import List from "./components/List.js";
import { Route, Switch } from 'react-router';
import MovieDetail from "./components/MovieDetail.js";
import movies from "./movies.js";

function App() {
  return (
    <div>
      <GlobalStyle />

      <Switch>
        <Route path="/:movieId">
          <MovieDetail movies={movies} />
        </Route>
        <Route exact path="/">
          <Title>MY FAVOURITE MOVIES</Title>
          <List />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
