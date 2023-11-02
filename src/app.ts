import express from "express";
import cors from "cors";
import { getHtml, postFormDataAndFile } from "./app.controllers";
require("dotenv").config();
import multer from "multer";
const upload = multer({ dest: "./public/data/uploads/" });

export const app = express();

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", getHtml);
app.post("/api/fileanalyse", upload.single("upfile"), postFormDataAndFile);
