import mongoose from "mongoose";

const connectDb = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.MONGO_URI, { dbName: process.env.DBNAME })
    .then(() => {
      console.log("database connected successfully");
    })
    .catch((error) => console.log("error", error));
};

export default connectDb;
