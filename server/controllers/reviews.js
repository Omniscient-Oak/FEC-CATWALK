const axios = require('axios');
const auth = require('../config.js');

module.exports = {
  // Question GET, POST & PUTs
  get: (req, res) => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews', {
      headers: {
        Authorization: auth,
      },
      params: {
        product_id: req.query.product_id,
        count: req.query.count,
        page: req.query.page,
        sort: req.body.sort,
      },
    })
      .then((questions) => { res.send(questions.data); })
      .catch((e) => { console.log(e); res.send(e); });
  },
  post: (req, res) => {
    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews', {
      product_id: req.body.product_id,
      rating: req.body.rating,
      summary: req.body.summary,
      body: req.body.body,
      recommend: req.body.recommend,
      name: req.body.name,
      email: req.body.email,
      photos: req.body.photos,
      characteristics: req.body.characteristics,
    },
    {
      headers: {
        Authorization: auth,
      },
    })
      .then((r) => { res.send(JSON.stringify(r.status)); })
      .catch((e) => { res.send(e); });
  },
  meta: (req, res) => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/meta', {
      headers: {
        Authorization: auth,
      },
      params: {
        product_id: req.query.product_id,
      },
    })
      .then((questions) => { res.send(questions.data); })
      .catch((e) => { console.log(e); res.send(e); });
  },
  helpful: (req, res) => {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/${req.query.review_id}/helpful`, {}, {
      headers: {
        Authorization: auth,
      },
    })
      .then((r) => { res.send(JSON.stringify(r.status)); })
      .catch((e) => { console.log(e); res.send(e); });
  },
  report: (req, res) => {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/${req.query.review_id}/report`, {}, {
      headers: {
        Authorization: auth,
      },
    })
      .then((r) => { res.send(JSON.stringify(r.status)); })
      .catch((e) => { console.log(e); res.send(e); });
  },
};
