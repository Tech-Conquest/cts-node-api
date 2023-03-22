import produce from "./helpers/producer";

const express = require('express');
const dotenv = require('dotenv');
const JWTValidation = require('../middleware/JWTValidation')

dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT;

app.use(express.json())

app.use(JWTValidation)

app.use("/",require("../routes"))

app.get('/', (req: any, res:any) => {
  res.send('Welcome to Cricket Tournament System!');
});

app.get('/ping', (req: any, res:any) => {
    res.send('CTS System is live!');
});

app.post('/log', (req: any, res:any) => {
const topic = "message-log";

  produce(topic, req.body.message).catch((err) => {
    console.error("error in producer: ", err)
  });
  res.send('Log System!');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});