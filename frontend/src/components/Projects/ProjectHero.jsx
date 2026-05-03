import { useEffect, useState } from "react";
import AddProjectBtn from "./ProjectBtn.jsx";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import axios from "axios";
import ProjectLoading from "../loading/ProjectLoading.jsx";

function Project() {
  let [featureWorkData, setFeatureWorkData] = useState([]);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    const featureWork = async () => {
      try {
        setLoading(true);
        const work = await axios.get(
          "https://portfolio-73tn.onrender.com/projects",
        );
        setFeatureWorkData(work.data.data);
      } catch (err) {
        console.log(err);
        setLoading(true);
      } finally {
        setLoading(false);
      }
    };
    featureWork();
  }, []);
  return (
    <div className="container">
      <div className="row mx-auto">
        <div className="col-12 d-flex justify-content-between align-items-center py-3 ms-md-3 text-center text-md-start">
          <h2 className="fw-bold">Work</h2>
          <AddProjectBtn />
        </div>
        <div className="col-12 text-center text-md-start">
          {loading
            ? Array.from({ length: 3 }).map((__, idx) => (
                <ProjectLoading key={idx} />
              ))
            : featureWorkData.map((val) => (
                <Link
                  to={`/project/${val._id}`}
                  className="text-decoration-none"
                  key={val._id}>
                  <div className="text-decoration-none row text-black">
                    <motion.div
                      className="col-md-3 col-12 my-3"
                      whileHover={{ scale: 1.05 }}>
                      <motion.img
                        src={val.img}
                        alt="Project Image"
                        className="img-fluid mt-2"
                        style={{ minHeight: "80%" }}
                      />
                    </motion.div>
                    <motion.div
                      className="col-md-9 my-3"
                      whileHover={{ x: 20 }}>
                      <h3 className="fw-bold mb-3">{val.title}</h3>

                      <div className="d-flex justify-content-around justify-content-md-start">
                        <p className="border rounded-pill px-3 py-1 year">
                          {val.year}
                        </p>
                        <p className="mx-md-5 p-1">{val.category}</p>
                      </div>

                      <p className="about-para">{val.about}</p>
                    </motion.div>
                    <hr />
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
