const axios = require('axios');
const auth = require('../config.js');
const model = require('../models/products.js');

module.exports = {
  get: async (req, res) => {
    try {
      const products = await model.get(req.query);
      res.send(products);
    } catch (error) {
      console.error(error);
    }
  },
  info: async (req, res) => {
    try {
      const info = await model.info(req.query);
      res.send(info);
    } catch (error) {
      console.error(error);
    }
  },
  styles: async (req, res) => {
    try {
      const styles = await model.styles(req.query);
      res.send(styles);
    } catch (error) {
      res.send(error.data);
      console.error(error);
    }
  },
  related: async (req, res) => {
    try {
      const related = await model.related(req.query);
      res.send(related);
    } catch (error) {
      res.send(error.data);
      console.error(error);
    }
  },
  allinfo: async (req, res) => {
    try {
      const info = await model.info(req.query);
      const styles = await model.styles(req.query);
      const combined = { ...info, styles: styles.results };
      res.send(combined);
    } catch (error) {
      res.send(error.data);
      console.error(error);
    }
  },
};
