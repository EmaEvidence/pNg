import { Router } from 'express';
import phoneNumber from '../controller';

const Route = new Router();

Route.get('/', (req, res) => {
  res.json({
    message: 'Welcome to phone number generator'
  }).status(200);
});
Route.get('/numbers', phoneNumber.read);
Route.post('/numbers', phoneNumber.generate);

export default Route;
