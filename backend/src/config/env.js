const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || "development",
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRETE: process.env.JWT_SECRETE,
};
