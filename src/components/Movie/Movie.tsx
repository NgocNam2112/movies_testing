import React from "react";
import { MovieResult } from "../../domain/models/Movie/Movie";
import "./Movie.css";

interface IMovieProps {
  movie: MovieResult;
}

const Movie: React.FC<IMovieProps> = ({ movie }) => {
  return (
    <div className={"movie"}>
      <div className="movie-title">
        {movie.poster_path && (
          <img
            src={
              `${process.env.REACT_APP_BACKDROP_PATH}/w342` + movie.poster_path
            }
            alt={movie.title}
          />
        )}
        <div className={"flex between movie-infos"}>
          <h5 className={"movie-title"}>{movie.title}</h5>
          {movie.vote_average ? (
            <span className={"movie-voting"}>{movie.vote_average}</span>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Movie;
