import mongoose from "mongoose";
const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      dbName: "PORTFOLIO",
    })
    .then(() => {
      console.log(`Connected to Database ${mongoose.connection.host}`);
    })
    .catch((err) => {
      console.log(`Some Error Occurred While Connecting To Database: ${err}`);
    });
};
export default dbConnection;
