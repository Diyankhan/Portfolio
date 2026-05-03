import { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import "./Project.css";

function DetailedProject() {
  let navigate = useNavigate();
  let [project, setProject] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const projectDetail = async () => {
      try {
        const projectData = await axios.get(
          `https://portfolio-73tn.onrender.com/projects/${id}`,
        );
        setProject(projectData.data.data);
        
        console.log(project)
      } catch (error) {
        console.log(error.message);
        navigate("/project")
        return;
      }
    };
    projectDetail();
  }, [id]);
  return (
    <div className="container">
      <div className="row">
        {project && (
          <div className="col-md-6 col-10 mx-auto text-center">
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer">
              <img src={`${project.img}`} alt="" className="img-fluid py-4" />
            </a>
            <h1>{project.title}</h1>
            <div className="d-flex justify-content-center py-3">
              <h4>{project.year}</h4>
              {project.category && (
                <>
                  <h4 className="mx-4">|</h4>
                  <h4 className="">{project.category}</h4>
                </>
              )}
            </div>
            <h3 className="project-link">Project Link </h3>{" "}
            <a
              href={project.projectLink}
              className="text-decoration-none d-block my-2"
              target="_blank"
              rel="noopener noreferrer">
              {project.projectLink}
            </a>
            <p className="about-para">{project.about}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DetailedProject;
