
   
import mongoose from "mongoose";
import env from "dotenv";

export default async () => {
  return mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  });
};