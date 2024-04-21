import express from 'express';
import connectDB from './config/Database';
import router from './routes/auth';

const app = express();

// Conectare la baza de date MongoDB
connectDB();

// Middleware pentru a procesa cererile JSON
app.use(express.json());

// Adăugare rutelor API
app.use('/api', router);

// Middleware pentru gestionarea erorilor
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Eroare internă a serverului.' });
});

// Pornirea serverului
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serverul rulează la adresa http://localhost:${PORT}`);
});

export default app;
