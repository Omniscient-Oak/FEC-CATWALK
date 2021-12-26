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
  .get(controller.qa.q.get)
  .post(controller.qa.q.post)
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

//REVIEW ROUTES
app.route('/reviews')
  .get(controller.reviews.get)
  .post(controller.reviews.post)
app.route('/reviews/meta')
  .get(controller.reviews.meta)
app.route('/reviews/helpful')
  .put(controller.reviews.helpful)
app.route('/reviews/report')
  .put(controller.reviews.report)