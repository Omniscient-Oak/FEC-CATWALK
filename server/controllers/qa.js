const axios = require('axios');
const auth = require('../config.js')

module.exports = {
  get: (req, res) => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions',{
      headers: {
        Authorization: auth
      },
      params: {
        product_id: req.query.product_id
      }
    })
    .then((questions)=>{res.send(questions.data)})
    .catch((e)=>{console.log(e); res.send(e); })

  },
  post: (req, res) => {
    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions', {
      data: {
        body: req.body.body,
        name: req.body.name,
        email: req.body.email,
        product_id: req.body.product_id
      }
    })
    .then(()=>{res.send('posted')})
    .catch((e)=>{console.log(e); res.send(e); })

  },
  helpful: {
    put: (req, res)=>{
      axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/${req.query.question_id}/helpful`, {}, {
        headers: {
          Authorization: auth
        },
      })
      .then((r)=>{res.send(r.statusCode)})
      .catch((e)=>{console.log(e); res.send(e); })
    }
  },
  report: {
    put: (req, res)=>{
      axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/${req.query.question_id}/report`)
      .then((r)=>{res.send(r)})
      .catch((e)=>{console.log(e); res.send(e); })
    }
  }
}