const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require("./config");

const authRoutes = require("./routes/auth");
const projectRoutes = require("./routes/projects");
const voteRoutes = require("./routes/votes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/votes", voteRoutes);

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.error("Unable to connect to the database:"));
