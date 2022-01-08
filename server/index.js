/* eslint-disable */
const express = require('express');
const controller = require('./controllers');
const path = require("path");
const serveIndex = require('serve-index');
const expressStaticGzip = require('express-static-gzip');
const ExpressRedisCache = require('express-redis-cache');

const cache = ExpressRedisCache({
  expire: 120, // optional: expire every 10 seconds
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

app.use(expressStaticGzip(__dirname + '/../client/dist'));

//PRODUCT ROUTES
app.route('/products')
  .get(controller.products.get)
app.route('/products/info')
  .get(controller.products.info)
app.route('/products/styles')
  .get(controller.products.styles)
app.route('/products/allinfo')
  .get(cache.route(), controller.products.allinfo)
app.route('/products/related')
  .get(controller.products.related)

//QA ROUTES
app.route('/qa/questions')
  .get(cache.route(), controller.qa.q.get)
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

//RELATED ROUTES
app.route('/related')
  .get(cache.route(), controller.related.get)

//CART ROUTES
app.route('/cart')
  .get(controller.cart.get)
  .post(controller.cart.post)

app.use('/store/*', expressStaticGzip(__dirname + '/../client/dist'), serveIndex(__dirname + '/../client/dist'));