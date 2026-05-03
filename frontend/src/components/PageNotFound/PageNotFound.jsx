import DinoGame from "./DinoGame";
import "./PageNotFound.css";
import { useNavigate } from "react-router-dom";
function PageNotFound() {
  let navigate = useNavigate();
  return (
    <div className="container psoition-fixed">
      <div className="row">
        <div className="col-12 d-flex flex-column align-items-center ">
          <h1 className="notFound">404</h1>
          <h1>Sorry, We are unable to find that page</h1>
        </div>
        <div className="col-12">
          <DinoGame />
        </div>
        <div className="col-1 mx-auto">
          <button className="btn btn-primary mt-5" onClick={() => navigate("/")}>Home</button>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
