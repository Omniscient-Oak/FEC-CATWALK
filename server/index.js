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


//QA ROUTES
app.route('/qa/questions')
  .get(controller.qa.get)
  .post(controller.qa.post)
app.route('/qa/questions/answers')
  .get(controller.qa.a.get)
  .post(controller.qa.a.post)
app.route('/qa/questions/helpful')
  .put(controller.qa.q.helpful)
app.route('/qa/questions/report')
  .put(controller.qa.q.report)
app.route('/qa/answers/helpful')
  .put(controller.qa.a.helpful)
app.route('/qa/answers/report')
  .put(controller.qa.a.report)