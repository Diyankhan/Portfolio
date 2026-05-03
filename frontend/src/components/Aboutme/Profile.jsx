import Education from "./Education";
import Skills from "./Skills";
import "./About.css";
import { useState } from "react";

function Profile() {
  let [showData, setShowData] = useState("Education");
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1 className="profile-heading mt-4 fw-bold">MY PROFILE</h1>
          <hr />
        </div>
        <div className="col-md-12 my-3 mx-auto d-flex justify-content-around content">
          <h3
            className={`px-2 ${showData === "Education" ? "text-info border-bottom border-info pb-2" : ""}`}
            onClick={() => setShowData("Education")}>
            Education
          </h3>

          <h3
            className={`px-2 ${showData === "Skills" ? "text-info border-bottom border-info pb-2" : ""}`}
            onClick={() => setShowData("Skills")}>
            Skills
          </h3>
          </div>
        {showData === "Education" && <Education />}
        {showData === "Skills" && <Skills />}
      </div>
    </div>
  );
}

export default Profile;
