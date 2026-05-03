require("dotenv").config();
const express = require("express");
const app = express();
const connectDb = require("./config/db");
const cors = require("cors");
const projectRoutes = require("./routes/projectRoutes");
const contactRoutes = require("./routes/contactRoutes");
const certificateRoutes = require("./routes/certificateRoutes");
const isLoggedIn = require("./routes/authenticateRoutes");
const limiter = require("./middleware/mailLimit");
const PORT = process.env.PORT || 3000;
const passport = require("passport");
const LocalStrategy = require("passport-local");
const userSession = require("./middleware/session");
const loginRoutes = require("./routes/loginRoutes");
const User = require("./model/userModel");

connectDb();

app.listen(PORT, () => {
  console.log(`Server is running at port : ${PORT}`);
});

app.use(
  cors({
    origin: "https://portfolio-ten-beta-3kwdg91ega.vercel.app",
    credentials: true,
  }),
);

app.use(userSession);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use(
  new LocalStrategy({ usernameField: "email" }, User.authenticate()),
);

app.get("/", (req, res) => {
  res.send("Backend Working");
});

app.use("/projects", projectRoutes);

app.use("/contact",contactRoutes);

app.use("/certificates", certificateRoutes);

app.use("/login", loginRoutes);

app.use("/auth", isLoggedIn);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

app.use((err, req, res, next) => {
  console.error(err);

  return res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal server error",
    status: err.status || 500,
  });
});
