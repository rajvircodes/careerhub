const app = require("./app");
const connectDB = require("./config/db");
const { PORT, NODE_ENV } = require("./config/env");

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running in ${NODE_ENV} on ${PORT}`);
    });
  } catch (error) {
    process.exit(1);
    console.error(error.message);
  }
};

startServer();
