const axios = require('axios');
const auth = require('../config.js');

module.exports = {
  // Question GET, POST & PUTs
  q: {
    get: (req, res) => {
      axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions', {
        headers: {
          Authorization: auth,
        },
        params: {
          product_id: req.query.product_id,
          count: req.query.count,
          page: req.query.page,
        },
      })
        .then((questions) => { res.send(questions.data); })
        .catch((e) => { console.log(e); res.send(e); });
    },
    post: (req, res) => {
      axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions', {
        body: req.body.body,
        name: req.body.name,
        email: req.body.email,
        product_id: req.body.product_id,
      },
      {
        headers: {
          Authorization: auth,
        },
      })
        .then((r) => { res.send(JSON.stringify(r.status)); })
        .catch((e) => { res.send(e); });
    },

    helpful: (req, res) => {
      axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/${req.query.question_id}/helpful`, {}, {
        headers: {
          Authorization: auth,
        },
      })
        .then((r) => { res.send(JSON.stringify(r.status)); })
        .catch((e) => { console.log(e); res.send(e); });
    },

    report: (req, res) => {
      axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/${req.query.question_id}/report`, {}, {
        headers: {
          Authorization: auth,
        },
      })
        .then((r) => { res.send(JSON.stringify(r.status)); })
        .catch((e) => { console.log(e); res.send(e); });
    },
  },

  // Answer POST & PUTs
  a: {
    get: (req, res) => {
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/${req.query.question_id}/answers`, {
        headers: {
          Authorization: auth,
        },
        params: {
          question_id: req.query.question_id,
          count: req.query.count,
          page: req.query.page,
        },
      })
        .then((r) => { res.send(JSON.stringify(r.data)); })
        .catch((e) => { res.send(e); });
    },
    post: (req, res) => {
      axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/${req.query.question_id}/answers`, {
        body: req.body.body,
        name: req.body.name,
        email: req.body.email,
        photos: req.body.photos,
      },
      {
        headers: {
          Authorization: auth,
        },
        params: {
          question_id: req.query.question_id,
        },
      })
        .then((r) => { res.send(JSON.stringify(r.status)); })
        .catch((e) => { res.send(e); });
    },

    helpful: (req, res) => {
      axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/answers/${req.query.answer_id}/helpful`, {}, {
        headers: {
          Authorization: auth,
        },
      })
        .then((r) => { res.send(JSON.stringify(r.status)); })
        .catch((e) => { console.log(e); res.send(e); });
    },

    report: (req, res) => {
      axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/answers/${req.query.answer_id}/report`, {}, {
        headers: {
          Authorization: auth,
        },
      })
        .then((r) => { res.send(JSON.stringify(r.status)); })
        .catch((e) => { console.log(e); res.send(e); });
    },
  },
};
