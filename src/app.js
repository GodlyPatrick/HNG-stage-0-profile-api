import express from 'express';
import cors from 'cors';
import router from './routes/profile.js';
const app = express();

// use cors middleware
app.use(cors());
// use route
app.use('/', router);
console.log('app file loaded successfully');
app.get('/check', (req, res) => {
  res.json({message: 'API is up and running!'});
});

export default app;
