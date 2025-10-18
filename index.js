import 'dotenv/config';
import app from './src/app.js';

const PORT = process.env.PORT || 5000;

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
  process.exit(1);
});

app.listen(PORT, /*'0.0.0.0',*/ () => {
  console.log(`Server is running on port ${PORT}`);
});


