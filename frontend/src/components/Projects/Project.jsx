import axios from "axios";
import { useState } from "react";
import AddProjectForm from "./ProjectForm";

function AddProjects() {
  let [loading, setLoading] = useState(false);
  const Prevent = async (data) => {
    const formData = new FormData();
    try {
      formData.append("title", data.title);
      formData.append("year", data.year);
      formData.append("about", data.about);
      formData.append("img", data.img[0]);
      formData.append("category", data.category);
      formData.append("projectLink", data.projectLink);
      setLoading(true);
      const res = await axios.post("https://portfolio-73tn.onrender.com/projects", formData, {
        withCredentials: true,
      });
      console.log(res);
      if (res.data.success) {
        alert("Project submission successfull");
      } else {
        alert("Project not Submitted");
      }
    } catch (e) {
      console.log(e);
      return;
    } finally {
      setLoading(false);
    }
  };
  return <AddProjectForm Prevent={Prevent} loading={loading} />;
}

export default AddProjects;
