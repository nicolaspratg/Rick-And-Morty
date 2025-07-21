const users = require("../utils/users");

const login = (req, res) => {
  // const { email, password } = req.query;

  // For demo: allow any credentials
  res.status(200).json({
    access: true,
    message: "User authenticated correctly (demo mode)",
  });
};

module.exports = { login };
