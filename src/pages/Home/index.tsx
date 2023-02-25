import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import Movie from "../../components/Movie/Movie";
import { Movies } from "../../domain/models/Movie/Movie";
import { fetchListMovie } from "../../infrastructure/Movie/MovieClient";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<Movies | null>();

  useEffect(() => {
    setLoading(true);
    fetchListMovie()
      .then((res) => {
        setTimeout(() => {
          setMovies(res);
          setLoading(false);
        }, 1000);
      })
      .catch((error) => {
        navigate("/errorPage");
      });
  }, []);

  if (loading) {
    return (
      <div className="center-max-size center-loading">
        <Loading />
      </div>
    );
  }

  if (!movies?.results.length) {
    return <h1>Sorry, no movies found</h1>;
  }

  return (
    <div className={"center-max-size container"}>
      {movies?.results.map((movie) => (
        <Link to={`/details/${movie.id}`}>
          <Movie movie={movie} />
        </Link>
      ))}
    </div>
  );
}

export default Home;
