import mongoose from "mongoose";

const connectMongo = async () => {
  if (mongoose.connections[0].readyState) {
    console.log("mongodb connected already");
  } else {
    console.log("mongodb not connected");
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("mongodb is now connected!");
  }
};
export default connectMongo;
