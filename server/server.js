import express from 'express';
import Route from './routes/index';

const app = express();

const port = process.env.port || 9000;

app.use(Route)
app.listen(port, () => {
  console.log('We are live here');
});

