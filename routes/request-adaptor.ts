const axios = require('axios');

module.exports = (baseURL:string) => {
  return axios.create({
    baseURL: baseURL
  });
};