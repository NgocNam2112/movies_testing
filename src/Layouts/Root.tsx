import { Link, Outlet } from "react-router-dom";
import "./Root.css";

const Root = () => {
  return (
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
  );
};

export default Root;
