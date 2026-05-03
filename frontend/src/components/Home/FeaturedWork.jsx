import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { motion } from "motion/react";
import ProjectLoading from "../loading/ProjectLoading";

function FeaturedWork() {
  let [FeaturedWorkData, setFeatureWorkData] = useState([]);
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    const FeaturedData = async () => {
      try {
        setLoading(true);
        let projects = await axios.get("https://portfolio-73tn.onrender.com/projects");
        setFeatureWorkData(projects.data.data);
      } catch (e) {
        console.log(e);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    FeaturedData();
  }, []);

  return (
    <motion.div className="container">
      <div className="row mx-auto">
        <div className="col-12 py-3 ms-md-3 text-center text-md-start">
          <h4>Featured Work</h4>
        </div>
        <div className="col-12">
          <div className="row">
            {loading
              ? Array({ length: 3 }).map((___, id) => (
                  <ProjectLoading key={id} />
                ))
              : FeaturedWorkData.map((val, idx) => (
                  <motion.section
                    className="row mb-3"
                    key={val._id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}>
                    <div className="col-md-3 col-12 mb-3">
                      <img
                        src={`${val.img}`}
                        alt="Project image"
                        className="img-fluid mt-4"
                        style={{ minHeight: "80%" }}
                      />
                    </div>
                    <div className="col-md-8 my-3">
                      <h3 className="fw-bold mb-3">{val.title}</h3>
                      <div className="d-flex">
                        <p className="border rounded-pill px-3 py-1 year">
                          {val.year}
                        </p>{" "}
                        <p className="mx-5 p-1">{val.category}</p>
                      </div>
                      <p className="about-para">{val.about}</p>
                    </div>
                    <hr />
                  </motion.section>
                ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default FeaturedWork;
