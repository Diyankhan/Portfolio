import "./About.css";
import Profile from "./Profile";

import AboutAni from "../Animations/AboutAni";
function About() {
  return (
    <div className="container">
      <div className="row mx-auto">
        <div className="col-md-5 col-lg-4 my-5 mx-md-auto mx-lg-0 ms-lg-auto">
          <img
            src="https://res.cloudinary.com/dgpnfehem/image/upload/v1777744710/Diyankhan_eg2ddp.jpg"
            alt=""
            className="img-fluid rounded-pill shadow-lg"
          />
        </div>
        <div className="col-md-12 col-lg-5 my-lg-5 me-lg-auto text-center text-lg-start">
          <h1 className="fw-bold owner-name d-inline">Diyan khan</h1>

          <h3 className="py-2">ABOUT ME</h3>
          <p className="lh-lg">
            <AboutAni />
          </p>
        </div>

        <Profile />
      </div>
    </div>
  );
}

export default About;
