import express from "express";
import cors from "cors";
import { json, urlencoded } from "body-parser";
import morgan from "morgan";
import dotenv from "dotenv";
import { port } from "./config/port";
import { connect } from "./config/db";
import itemRouter from "./resources/item/item.router";

const app = express();

app.disable("x-powered-by");

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/", (req, res) => {
  res.status(200).json({
    message: "Hello from the server",
  });
});

app.use("/api/item", itemRouter);

export const start = async () => {
  try {
    await connect();
    app.listen(port);
    console.log(`App is up and running on port ${port}`);
  } catch (error) {
    console.error(error);
  }
};
