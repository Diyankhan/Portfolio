import { Navigate } from "react-router-dom";

function Protection({ isAuth, children }) {
  if (isAuth === null) {
    return <div>Loading...</div>;
  }

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default Protection;