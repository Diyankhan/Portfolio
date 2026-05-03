import { motion } from "motion/react";
import "./About.css";
function Skills() {
  let skillsData = [
    {
      title: "Programming",
      skills: [
        { icon: "fa-brands fa-java", name: "Java" },
        { icon: "fa-brands fa-js text-warning", name: "JavaScript" },
        { icon: "fa-brands fa-python", name: "Python" },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { icon: "fa-brands fa-html5 text-danger", name: "HTML" },
        { icon: "fa-brands fa-css3 text-primary", name: "CSS" },
        { icon: "fa-brands fa-bootstrap", name: "BootStrap" },
        { icon: "fa-brands fa-react text-info", name: "React" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { icon: "fa-brands fa-node-js", name: "Node.js" },
        { icon: "fa-brands fa-node", name: "Express" },
      ],
    },
    {
      title: "Database",
      skills: [{ icon: "fa-solid fa-database", name: "MongoDB" }],
    },
    {
      title: "Core Concepts",
      skills: [
        { icon: "fa-solid fa-chart-diagram text-warning", name: "DSA" },
        { icon: "fa-solid fa-cube text-info", name: "OOP" },
        { icon: "fa-solid fa-gear", name: "REST APIs" },
      ],
    },
    {
      title: "Data Science",
      skills: [
        { icon: "fa-solid fa-table", name: "Numpy" },
        { icon: "fa-solid fa-paw", name: "Pandas" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { icon: "fa-brands fa-git-alt", name: "Git" },
        { icon: "fa-brands fa-github", name: "GitHub" },
        { icon: "fa-solid fa-envelope", name: "Postman" },
        { icon: "fa-solid fa-cloud", name: "Cloudinary" },
        { icon: "fa-solid fa-server", name: "Render" },
      ],
    },
  ];

  return (
    <motion.div
      className="container mb-5"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}>
      <div className="row">
        <div className="col-md-8 mx-auto border rounded p-4 skills-section">
          <div>
            {skillsData.map((val, idx) => (
              <div
                key={idx}
                className="d-flex align-items-center py-3 flex-column flex-md-row">
                <h3 className="text-info">{val.title} : &nbsp; </h3>
                <motion.p className="fs-4 m-0 badges" whileHover={{ x: 10 }}>
                  {val.skills.map((data, index) => (
                    <span
                      className="px-2 d-flex d-md-inline-block align-items-center"
                      key={data.name}>
                      <i className={data.icon}></i> {data.name}{" "}
                      {index != val.skills.length - 1 && (
                        <span className="d-none d-md-inline-block">|</span>
                      )}
                    </span>
                  ))}
                </motion.p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
