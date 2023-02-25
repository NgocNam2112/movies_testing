import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import Movie from "../../components/Movie/Movie";
import { Movies } from "../../domain/models/Movie/Movie";
import { fetchListMovie } from "../../infrastructure/Movie/MovieClient";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<Movies | null>();
  const [pageCurrent, setPageCurrent] = useState<number>(0);

  const { search } = useLocation();

  const handleFetchListMovie = (currentPage: number) => {
    setLoading(true);
    fetchListMovie(currentPage + 1)
      .then((res) => {
        setTimeout(() => {
          setMovies(res);
          setLoading(false);
        }, 1000);
      })
      .catch((error) => {
        navigate("/errorPage");
      });
  };

  const handlePageClick = (data: { selected: number }) => {
    navigate(`?page=${data.selected + 1}`);
    setPageCurrent(data.selected);
    handleFetchListMovie(data.selected);
  };

  useEffect(() => {
    const searchQuery = search.split("=")[1];
    if (!searchQuery) {
      setPageCurrent(0);
      handleFetchListMovie(1);
      return;
    }
    setPageCurrent(+searchQuery - 1);
    handleFetchListMovie(+searchQuery);
  }, [search]);

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
    <>
      <div className={"center-max-size container"}>
        {movies?.results.map((movie, index) => (
          <Link to={`/details/${movie.id}`} key={index}>
            <Movie movie={movie} />
          </Link>
        ))}
      </div>
      <div className="center-max-size pagination">
        <ReactPaginate
          breakClassName="page-item"
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={20}
          previousLabel="< previous"
          forcePage={pageCurrent}
        />
      </div>
    </>
  );
}

export default Home;
