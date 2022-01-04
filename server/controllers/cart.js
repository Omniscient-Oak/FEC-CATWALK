const axios = require('axios');
const auth = require('../config.js');

module.exports = {
  get: (req, res) => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/cart', {
      headers: {
        Authorization: auth,
      },
      params: {
        sku_id: req.query.sku_id,
      },
    })
      .then((questions) => { res.send(questions.data); })
      .catch((e) => { console.log(e); res.send(e); });
  },
  post: (req, res) => {
    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/cart', {
      sku_id: req.body.sku_id,
    },
    {
      headers: {
        Authorization: auth,
      },
    })
      .then((r) => { res.send(JSON.stringify(r.status)); })
      .catch((e) => { res.send(e); });
  },
};
