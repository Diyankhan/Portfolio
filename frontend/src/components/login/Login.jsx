import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Notification from "../Contact/Notification";
import Protection from "../Protection/Protection";
import ShowPass from "./ShowPass";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

function Login({ setIsAuth }) {
  let [showNoti, setShowNoti] = useState(false);
  let [msg, setMsg] = useState("");
  let [notiColor, setNotiColor] = useState(false);
  let [showPass, setShowPass] = useState("password");
  let [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginData = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://portfolio-73tn.onrender.com/login",
        {
          email: data.email,
          password: data.password,
        },
        { withCredentials: true },
      );
      if (response.data.login) {
        setIsAuth(true);
        navigate("/project/addProject");
        console.log("Naviagted to project/addProject");
      }
    } catch (err) {
      setShowNoti(true);
      setNotiColor(false);
      setLoading(false);
      setMsg(err.response.data.message);
      setTimeout(() => {
        setShowNoti(false);
      }, 5000);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container">
      <div className="row">
        <Notification
          showNoti={showNoti}
          msg={msg}
          setShowNoti={setShowNoti}
          notiColor={notiColor}
        />
        <div className="col-md-8 col-lg-5 col-10 mx-auto p-4 border my-5">
          <form onSubmit={handleSubmit(loginData)}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                autoComplete="username"
                aria-describedby="emailHelp"
                placeholder="Email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Enter email",
                  },
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter valid email",
                  },
                })}
              />
              {errors.email && (
                <p className="text-danger">{errors.email.message}</p>
              )}
              <div id="emailHelp" className="text-secondary">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className="d-flex justify-content-end align-items-center">
                <input
                  type={showPass}
                  className="form-control"
                  id="password"
                  placeholder="password"
                  autoComplete="current-password"
                  {...register("password", { required: true })}
                />
                <ShowPass showPass={showPass} setShowPass={setShowPass} />
              </div>

              {errors.password && (
                <p className="text-danger">Enter the password</p>
              )}
            </div>
            <Button
              size="small"
              type="submit"
              endIcon={<SendIcon />}
              loading={loading}
              loadingPosition="end"
              variant="contained"
              className="mt-2">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
