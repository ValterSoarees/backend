const express = require('express');
const env = require('dotenv/config');
const cors = require("cors");

const ComentarioRouter = require('./src/routers/comentaRouter')

const  PORT = 3003;
const database = require("./src/db");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/app", ComentarioRouter)

app.listen(process.env.PORT | PORT, async () => {
  const resultDb = await database.sync({});
  console.log(PORT,"servidor rodando na porta 3003");
});