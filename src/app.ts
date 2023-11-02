import express from "express";
import cors from "cors";
import multer from "multer";
import dotenv from "dotenv";
import { getHtml, postFormDataAndFile } from "./app.controllers";

dotenv.config();

const upload = multer({ dest: "./public/data/uploads/" });

export const app = express();

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", getHtml);
app.post("/api/fileanalyse", upload.single("upfile"), postFormDataAndFile);
