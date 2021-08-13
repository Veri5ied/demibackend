import express from "express";
import cors from "cors";
import { json, urlencoded } from "body-parser";
import morgan from "morgan";
import { port } from "./config/port";
import { connect } from "./config/db";
import itemRouter from "./resources/item/item.router";

const app = express();

app.disable("x-powered-by");

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

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
