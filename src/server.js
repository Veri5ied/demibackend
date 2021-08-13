import express from "express";
import cors from "cors";
import { json, urlencoded } from "body-parser";
import morgan from "morgan";
import { port } from "./config/port";
import { connect } from "./config/db";
import itemRouter from "./resources/item/item.router";
import listRouter from "./resources/list/list.router";

const app = express();

app.disable("x-powered-by");

app.use(cors());
app.use(json());
app.use(morgan("dev"));
app.use(urlencoded({ extended: true }));

app.use("/api/item", itemRouter);
app.use("/api/list", listRouter);

export const start = async () => {
  try {
    await connect();
    app.listen(port);
    console.log(`App is up and running on port ${port}`);
  } catch (error) {
    console.error(error);
  }
};
