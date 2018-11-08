import express from 'express';
import Route from './routes/index';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.header('Access-Control-Allow-Headers',
  'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

const port = process.env.port || 9000;

app.use(Route)
app.listen(port, () => {
  console.log('We are live here');
});

