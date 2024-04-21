import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => ({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: theme.palette.background.default,
    },
    formContainer: {
      width: 300,
      padding: 20,
      backgroundColor: theme.palette.background.paper,
    },
    formGroup: {
      marginBottom: 20,
    },
    button: {
      marginTop: 20,
    },
  }));

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const classes = useStyles();
  const navigate = useNavigate(); // Obținem funcția navigate

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', {
        email,
        password
      });
      console.log(response.data); // tratamentul autentificării reușite
      // Redirecționare către pagina Dashboard după autentificare
      navigate('/dashboard');
    } catch (error) {
      console.error('Autentificarea a eșuat:', error);
    }
  };

  return (
    <Container className={classes.container}>
      <div className={classes.formContainer}>
        <Typography variant="h5" gutterBottom>
          Autentificare
        </Typography>
        <TextField
          className={classes.formGroup}
          label="Email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          className={classes.formGroup}
          label="Parolă"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={handleLogin}
        >
          Autentificare
        </Button>
      </div>
      <p>Nu ai un cont? <Link to="/authpage">Înregistrează-te</Link></p>
    </Container>
  );
};

export default LoginPage;
