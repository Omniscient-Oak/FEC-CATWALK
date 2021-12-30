const axios = require('axios');
const auth = require('../config.js')

module.exports = {
  get: async (query) => {
    try {
      let products = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/`, {
      headers: {
        Authorization: auth
      },
      params: {
        count: query.count,
        page: query.page
      }
    })
    return products.data;
    } catch (error) {
      return(error.data);
      console.error(error);
    }
  },
  info: async (query) => {
    
    try {
      let info = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${query.product_id}/`, {
      headers: {
        Authorization: auth
      },
      params: {
        product_id: query.product_id,
      }
    })
    return info.data;
    } catch (error) {
      return(error.data);
      console.error(error);
    }
  },
  styles: async (query) => {
    try {
      let styles = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${query.product_id}/styles`, {
      headers: {
        Authorization: auth
      },
      params: {
        product_id: query.product_id,
      }
    })
    return styles.data;
    } catch (error) {
      console.error(error);
    }
  },
  related: async (query) => {
    try {
      let related = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${query.product_id}/related`, {
      headers: {
        Authorization: auth
      },
      params: {
        product_id: query.product_id,
      }
    })
    return related.data;
    } catch (error) {
      return(error.data);
      console.error(error);
    }
  },
}