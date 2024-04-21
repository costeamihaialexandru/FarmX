import React, { useState } from 'react';
import axios from 'axios';
import { Container, Typography, TextField, Button, Select, MenuItem } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    },
    formContainer: {
      width: 300,
      padding: 20,
    },
    formGroup: {
      marginBottom: 20,
    },
    button: {
      marginTop: 20,
    },
  }));

const AuthPage: React.FC = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerFirstName, setRegisterFirstName] = useState('');
  const [registerLastName, setRegisterLastName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerDepartment, setRegisterDepartment] = useState('');
  const [registerRole, setRegisterRole] = useState('');
  const classes = useStyles();

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', {
        email: loginEmail,
        password: loginPassword
      });
      console.log(response.data); // handle successful login
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post('/api/register', {
        firstName: registerFirstName,
        lastName: registerLastName,
        email: registerEmail,
        password: registerPassword,
        department: registerDepartment,
        role: registerRole
      });
      console.log(response.data); // handle successful registration
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <Container className={classes.container}>
      <div className={classes.formContainer}>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <TextField
          className={classes.formGroup}
          label="Email"
          fullWidth
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
        />
        <TextField
          className={classes.formGroup}
          label="Password"
          type="password"
          fullWidth
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={handleLogin}
        >
          Login
        </Button>

        <Typography variant="h5" gutterBottom>
          Register
        </Typography>
        <TextField
          className={classes.formGroup}
          label="First Name"
          fullWidth
          value={registerFirstName}
          onChange={(e) => setRegisterFirstName(e.target.value)}
        />
        <TextField
          className={classes.formGroup}
          label="Last Name"
          fullWidth
          value={registerLastName}
          onChange={(e) => setRegisterLastName(e.target.value)}
        />
        <TextField
          className={classes.formGroup}
          label="Email"
          type="email"
          fullWidth
          value={registerEmail}
          onChange={(e) => setRegisterEmail(e.target.value)}
        />
        <TextField
          className={classes.formGroup}
          label="Password"
          type="password"
          fullWidth
          value={registerPassword}
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <Select
          className={classes.formGroup}
          value={registerDepartment}
          onChange={(e) => setRegisterDepartment(e.target.value)}
          fullWidth
        >
          <MenuItem value="">Select Department</MenuItem>
          <MenuItem value="HR">Human Resources</MenuItem>
          <MenuItem value="IT">Information Technology</MenuItem>
          <MenuItem value="Finance">Finance</MenuItem>
          <MenuItem value="Marketing">Marketing</MenuItem>
          <MenuItem value="Legal">Legal</MenuItem>
          <MenuItem value="Operative">Operative</MenuItem>
        </Select>
        <Select
          className={classes.formGroup}
          value={registerRole}
          onChange={(e) => setRegisterRole(e.target.value)}
          fullWidth
        >
          <MenuItem value="">Select Role</MenuItem>
          <MenuItem value="Director">Director</MenuItem>
          <MenuItem value="Department Director">Department Director</MenuItem>
          <MenuItem value="Employee">Employee</MenuItem>
        </Select>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={handleRegister}
        >
          Register
        </Button>
      </div>
    </Container>
  );
};

export default AuthPage;
