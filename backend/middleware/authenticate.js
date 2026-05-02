const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.json({
    success: false,
  });
};

module.exports = isLoggedIn;
