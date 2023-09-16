import express from "express";

import Connection from "./database/db.js";

import dotenv from "dotenv";

import Routes from "./routes/routes.js";
import cors from "cors";
import bodyParser from "body-parser";

const port = 8000;

const app = express();

dotenv.config();

app.use(bodyParser.json({ extended: true })); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use("/", Routes);

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(port, () =>
  console.log(`server is running successfully on port ${port} `)
);
