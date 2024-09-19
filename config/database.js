const mongoose = require("mongoose");
require("dotenv").config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {});
    console.log("DB connected successfully");
  } catch (err) {
    console.log("DB CONNECTION ISSUES");
    console.error(err);
    process.exit(1);
  }
};

module.exports = { connect };