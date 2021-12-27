const axios = require('axios');
const auth = require('../config.js');

module.exports = {
  meta: async (query) => {
    try {
      let meta = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/meta`, {
      headers: {
        Authorization: auth
      },
      params: {
        product_id: query.product_id,
      }
    })
    return meta.data;
    } catch (error) {
      return(error.data);
      console.error(error);
    }
  }
}