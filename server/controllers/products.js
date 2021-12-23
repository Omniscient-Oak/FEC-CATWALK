const axios = require('axios');

module.exports = {
  get: async (req, res) => {
    const products = await axios.get();
    res.send(products);
  },
};
