
import "./Login.css";
import { motion } from "motion/react";
function ShowPass({ showPass, setShowPass }) {
  const toggleBtn = () => {
    setShowPass((prev) => {
      return prev === "password" ? "text" : "password";
    });
  };
  return (
    <>
      <i
        className="fa-solid fa-eye position-absolute me-3 fs-5 z-1"
        style={{ color: "black" }}
        onClick={toggleBtn}></i>
      <i
        className={`fa-solid fa-minus position-absolute me-2 fs-2 ${showPass === "text" ? "hide-line" : "show-line"}`}></i>
    </>
  );
}

export default ShowPass;
