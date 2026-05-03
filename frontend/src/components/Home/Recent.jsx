import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "motion/react";
import RecentLoading from "../loading/RecentLoading";
function RecentPost() {
  let [postsData, setPostData] = useState([]);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    const recent = async () => {
      try {
        setLoading(true);
        const recentData = await axios.get(
          "https://portfolio-73tn.onrender.com/projects",
        );
        setPostData(recentData.data.data);
      } catch (e) {
        setLoading(false);
        console.log(e);
        return;
      } finally {
        setLoading(false);
      }
    };
    recent();
  }, []);
  return (
    <div className="Recent">
      <div className="container mt-md-5">
        <div className="row mt-md-5">
          <div className="col-lg-10 mx-auto">
            <h4 className="my-3 heading-post">Recent post</h4>
          </div>

          <div className="col-12">
            <div className="row justify-content-md-around pb-5">
              {loading
                ? Array({ length: 2 }).map((___, id) => (
                    <div className="col-md-5 col-10 posts p-5 mx-auto mb-5 ">
                      <RecentLoading key={id} />
                    </div>
                  ))
                : postsData.slice(0, 3).map((val, idx) => (
                    <motion.div
                      className="col-md-5 col-10 posts p-5 mx-auto mb-5 "
                      key={val._id}
                      initial={{ opacity: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}>
                      <h4 className="py-2">{val.title}</h4>
                      <p className="py-2">
                        {val.year} | {val.category}
                      </p>
                      <p className="about-para">{val.about}</p>
                    </motion.div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentPost;
