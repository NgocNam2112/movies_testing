import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import "./Root.css";
import PullToRefresh from "react-simple-pull-to-refresh";

const Root = () => {
  const { search } = useLocation();
  const navigate = useNavigate();

  const handleRefresh = async () => {
    const searchQuery = search.split("=")[1];
    if (!searchQuery) {
      navigate("/?page=2");
      return;
    }
    navigate(`/?page=${+searchQuery + 1}`);
  };

  return (
    <PullToRefresh onRefresh={handleRefresh}>
      <div>
        <header className="center-max-size header">
          <span className="brand">
            <Link to="/">Movie Trailer App</Link>
          </span>
          <form className="form">
            <input className="search" type="text" id="search" />
            <button className="submit-search" type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </header>
        <Outlet />
      </div>
    </PullToRefresh>
  );
};

export default Root;
