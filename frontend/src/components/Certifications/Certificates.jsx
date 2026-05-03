import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../loading/Loading";
function Certificates() {
  let [certificates, setCertificates] = useState([]);
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    const showCerti = async () => {
      try {
        setLoading(true);
        const certiData = await axios.get("https://portfolio-73tn.onrender.com/certificates");
        setCertificates(certiData.data.data);
      } catch (error) {
        console.log(error);
        return;
      } finally {
        setLoading(false);
      }
    };
    showCerti();
  }, []);

  return (
    <div className="container">
      <div className="row mt-5">
        <h2 className="text-center text-md-start">CERTIFICATIONS</h2>
        {loading
          ? Array(8)
              .fill()
              .map((val, idx) => <Loading key={idx} />)
          : certificates.map((val) => (
              <div
                className="col-md-3 col-10 my-3 mx-auto mx-md-0"
                key={val._id}>
                <div
                  className="card border border-2"
                  style={{ backgroundColor: "transparent" }}>
                  <img
                    src={val.thumbnail}
                    className="card-img-top p-2"
                    alt={val.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-white">{val.title}</h5>
                    <a
                      href={val.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-opacity-50-hover mt-1 text-decoration-none btn btn-outline-info">
                      <i className="fa-solid fa-certificate me-2"></i>
                      View certificate
                    </a>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Certificates;
