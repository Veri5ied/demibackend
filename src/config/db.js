import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const client = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.vumli.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

export const connect = async () => {
  try {
    await mongoose.connect(client, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to mongodb database successfully");
  } catch (error) {
    console.error(error);
  }
};
