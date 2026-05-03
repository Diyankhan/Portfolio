import axios from "axios";
import { useNavigate } from "react-router-dom";
import Protection from "../Protection/Protection";
function AddProjectBtn() {
  const navigate = useNavigate();
  const authenticate = async () => {
    try {
      const response = await axios.get("https://portfolio-73tn.onrender.com/auth", {
        withCredentials: true,
      });
      console.log(response.data.login);
      if (response.data.login) {
        navigate("/project/addProject");
      } else {
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <button className="btn btn-danger" onClick={authenticate}>
        Add Project
      </button>
    </>
  );
}

export default AddProjectBtn;
