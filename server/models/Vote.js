const { DataTypes } = require("sequelize");
const sequelize = require("../config");

const Vote = sequelize.define(
  "Vote",
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    projectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Vote;
