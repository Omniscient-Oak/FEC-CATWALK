const redis = require('redis');
const { promisify } = require('util');

const url = `redis://redis:6379`;
//Modify ttl to set cache time to live
const ttl = 90;
const client = redis.createClient({
  url
});

client.on("error", (err) => {
    console.log(err);
});

client.on("Connect", () => {
  console.log('Connected');
});

client.connect();

module.exports = {
  checkCache: async (req, res, next) => {
    const resData = await client.get(req.url).catch((e)=>{throw err})
    if (resData) {
      res.send(resData)
    } else {
      next();
      let sendData = res.send;
        res.send = function(data) {
          client.SETEX(req.url, ttl, JSON.stringify(data));
          res.send = sendData;
          return res.send(data);
        }
    }
  }
}