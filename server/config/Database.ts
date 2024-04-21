import mongoose, { ConnectOptions } from 'mongoose';

const connectDB = async () => {
  try {
    // Conectare la baza de date MongoDB
    await mongoose.connect('mongodb://localhost:27017/farmx', {
      useNewUrlParser: true,
      useUnifiedTopology: true // Pentru a preveni avertismente legate de indexare
    } as ConnectOptions);
    console.log('Conexiunea cu baza de date MongoDB a fost stabilită.');
  } catch (error) {
    console.error('Eroare la conectarea cu baza de date MongoDB:', error);
    process.exit(1); // Ieșire din proces cu cod de eroare
  }
};

export default connectDB;
