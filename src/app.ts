import express from "express";
import cors from "cors";
import { getHtml } from "./app.controllers";
require("dotenv").config();

export const app = express();

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", getHtml);
