const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = await User.create({ name, email, password: hashedPassword });
    const token = jwt.sign({ id: user.id }, "YOUR_SECRET_KEY");
    res.json({
      user: { id: user.id, name: user.name, email: user.email },
      token,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ id: user.id }, "YOUR_SECRET_KEY");
    res.json({
      user: { id: user.id, name: user.name, email: user.email },
      token,
    });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
};
