const { DataTypes } = require("sequelize");
const sequelize = require("../config");

const Project = sequelize.define(
  "Project",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    lat: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    lon: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    funding: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Project;
