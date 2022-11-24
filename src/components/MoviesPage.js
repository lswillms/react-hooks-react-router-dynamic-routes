import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {
  
  const match = useRouteMatch()

  return (
    <div>
      <MoviesList movies={movies} />
      <Route exact path = {`${match.url}`}/>
      <Route path = {`${match.url}/:moviedId`}/>
      <MovieShow movies = {movies}/>
    </div>
  );
}
export default MoviesPage;
