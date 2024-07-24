const mongoose = require("mongoose");
const connectDB = async () => {
  const URI =
    "mongodb+srv://sumanth123:sumanthg2003@s0.v2x4eql.mongodb.net/?retryWrites=true&w=majority&appName=S0";

  mongoose
    .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB successfully."))
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err.message);
      process.exit(1); // Exit with a failure code
    });
};
module.exports = connectDB;
