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

        <footer>
          <div className="footer">
            <div className="row">
              Copyright [2016] Nam-Nguyen <br /> Licensed under the Apache
              License, Version 2.0 (the "License"); <br />
              you may not use this file except in compliance with the License.{" "}
              <br />
              You may obtain a copy of the License at <br /> <br />
              http://www.apache.org/licenses/LICENSE-2.0 <br />
              <br />
              Unless required by applicable law or agreed to in writing,
              software <br />
              distributed under the License is distributed on an "AS IS" BASIS,{" "}
              <br />
              WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
              implied. <br />
              See the License for the specific language governing permissions
              and <br />
              limitations under the License.
            </div>
          </div>
        </footer>
      </div>
    </PullToRefresh>
  );
};

export default Root;
