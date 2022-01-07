const productsModel = require('../models/products.js');
const reviewsModel = require('../models/reviews.js');

module.exports = {
  get: async (req, res) => {
    try {
      const relatedItems = await productsModel.related(req.query);
      const relatedItemsUniq = Array.from(new Set(relatedItems));
      const relatedItemInfo = await Promise.all(relatedItemsUniq.map(async (item) => {
        const query = { product_id: item };
        const getReq = [productsModel.styles, productsModel.info, reviewsModel.meta];
        const getRes = await Promise.all(getReq.map(async (get) => get(query)));
        let styleInfo;
        let itemInfo;
        let reviewMeta;
        [styleInfo, itemInfo, reviewMeta] = [...getRes];
        let photo = null;
        styleInfo.results.forEach((style) => {
          if (style['default?']) {
            photo = style.photos[0].thumbnail_url;
          }
        });
        if (!photo) {
          photo = styleInfo.results[0].photos[0].thumbnail_url;
        }
        if (Object.keys(reviewMeta.ratings).length > 0) {
          const numReviews = (Object.values(reviewMeta.ratings).reduce(
            (total, num) => parseInt(total) + parseInt(num),
          ));
          const combinedRatings = (Object.keys(reviewMeta.ratings).reduce(
            (total, rating) => (parseInt(total) + (parseInt(rating) * parseInt(reviewMeta.ratings[rating]))),
          ));
          const rating = Math.round((combinedRatings / numReviews) * 100) / 100;
          return { ...itemInfo, photo, rating };
        }
        return { ...itemInfo, photo, rating: 0 };
      }));
      res.send(relatedItemInfo);
    } catch (e) {
      res.status(500);
      res.send(e);
      console.error(e);
    }
  },
};
