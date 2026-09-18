const mongoose = require("mongoose");
require("dotenv").config();

const dns= require("dns")
dns.setServers(["1.1.1.1","8.8.8.8"])

console.log("Starting MongoDB test...");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("MongoDB connection failed:");
    console.error(error);
    process.exit(1);
  });