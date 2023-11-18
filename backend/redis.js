const redis = require("redis");
const dotenv = require("dotenv");

dotenv.config();

const redisClient = () => {
  return redis.createClient();
};

const client = redisClient();

client.on("error", (err) => {
  console.log(err);
});

client.on("Connect", () => {
  console.log("Connect to Redis");
});

client.on("End", () => {
  console.log("Redis Connection Ended");
});

client.on("SIGQUIT", () => {
  client.quit();
});

module.exports = client;
