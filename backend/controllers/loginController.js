const passport = require("passport");
const expressError = require("../expressError");

exports.login = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);

    if (!user) {
      throw new expressError(404, "Invalid credentials");
    }

    req.login(user, (err) => {
      if (err) return next(err);

      return res.status(200).json({
        login: true,
        message: "Login successful",
      });
    });
  })(req, res, next);
};
