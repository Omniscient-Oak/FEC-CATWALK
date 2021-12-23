/* eslint-disable */
const express = require('express');
const controller = require('./controllers')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

app.use(express.static(__dirname + '/../client/dist'));

app.route('/products')
  .get(controller.products.get)

app.route('/qa/questions')
  .get(controller.qa.get)
  .post(controller.qa.post)

app.route('/qa/helpful')
  .put(controller.qa.helpful.put)