import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User';

const router = express.Router();

// Ruta pentru autentificare
router.post('/', async (req: Request, res: Response) => {
  const {email, password} = req.body;

  try {
    // Caută utilizatorul în baza de date după email
    const user = await User.findOne({ email });

    // Verifică dacă utilizatorul există
    if (!user) {
      return res.status(404).json({ message: 'Utilizatorul nu există.' });
    }

    // Verifică dacă parola este corectă
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Parolă incorectă.' });
    }

    // Autentificare reușită
    return res.status(200).json({ message: 'Autentificare reușită.' });

  } catch (error) {
    console.error('Eroare la autentificare:', error);
    return res.status(500).json({ message: 'Eroare la autentificare.' });
  }
});

// Ruta pentru înregistrare
router.post('/authpage', async (req: Request, res: Response) => {
  const { firstName, lastName, email, password, department, role } = req.body;

  try {
    // Verifică dacă există deja un utilizator cu același email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Există deja un utilizator cu acest email.' });
    }

    // Criptează parola utilizatorului
    const hashedPassword = await bcrypt.hash(password, 10);

    // Creează un nou utilizator
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      department,
      role
    });

    // Salvează utilizatorul în baza de date
    await newUser.save();

    return res.status(201).json({ message: 'Utilizator înregistrat cu succes.' });

  } catch (error) {
    console.error('Eroare la înregistrare:', error);
    return res.status(500).json({ message: 'Eroare la înregistrare.' });
  }
});

export default router;
