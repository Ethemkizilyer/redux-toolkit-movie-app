const { default: axios } = require("axios");

export default axios.create({
  baseURL: "http://www.omdbapi.com",
});