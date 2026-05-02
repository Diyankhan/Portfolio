require("dotenv").config();
const mongoose = require("mongoose");

const connectDb = async () => {
  if (!process.env.MONGOOSE_URL) {
    console.error("MONGOOSE_URL not found");
    process.exit(1);
  }
  try {
    await mongoose.connect(process.env.MONGOOSE_URL);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB error:", error.message);
    process.exit(1);
  }

  mongoose.connection.on("disconnected", () => {
    console.warn("MongoDB disconnected");
  });
  mongoose.connection.on("reconnected", () => {
    console.log("MongoDB reconnected ");
  });
  mongoose.connection.on("error", (error) => {
    console.error("MongoDB error:", error.message);
  });
};

module.exports = connectDb;
