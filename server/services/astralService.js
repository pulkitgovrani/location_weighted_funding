const axios = require("axios");

const ASTRAL_API_URL = "https://api.astral.global/v1";

exports.verifyLocationProof = async (locationData) => {
  try {
    const response = await axios.post(`${ASTRAL_API_URL}/verify`, locationData);
    return response.data;
  } catch (error) {
    throw new Error("Location verification failed");
  }
};
