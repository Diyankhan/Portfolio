import "./Login.css";
function ShowPass({ showPass, setShowPass }) {
  let hide = "https://img.icons8.com/material/24/hide--v1.png";
  let show = "https://img.icons8.com/material/24/visible--v1.png";
  const toggleBtn = () => {
    setShowPass((prev) => {
      return prev === "password" ? "text" : "password";
    });
  };
  return (
    <>
      <img
        width="24"
        height="24"
        src={`${showPass === "text" ? show : hide}`}
        alt="hide--v1"
        className="position-absolute me-3"
        onClick={toggleBtn}
      />
    </>
  );
}

export default ShowPass;
