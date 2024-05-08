import React, { useState } from 'react';
import axios from 'axios';
import { Container, Typography, TextField, Button, Select, MenuItem } from '@mui/material';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormContainer = styled.div`
  width: 300px;
  padding: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
`;

const AuthPage: React.FC = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerFirstName, setRegisterFirstName] = useState('');
  const [registerLastName, setRegisterLastName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerDepartment, setRegisterDepartment] = useState('');
  const [registerRole, setRegisterRole] = useState('');

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
    <StyledContainer>
      <FormContainer>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <FormGroup>
          <TextField
            label="Email"
            fullWidth
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
        </FormGroup>
        <StyledButton
          variant="contained"
          color="primary"
          onClick={handleLogin}
        >
          Login
        </StyledButton>

        <Typography variant="h5" gutterBottom>
          Register
        </Typography>
        <FormGroup>
          <TextField
            label="First Name"
            fullWidth
            value={registerFirstName}
            onChange={(e) => setRegisterFirstName(e.target.value)}
          />
          <TextField
            label="Last Name"
            fullWidth
            value={registerLastName}
            onChange={(e) => setRegisterLastName(e.target.value)}
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            value={registerEmail}
            onChange={(e) => setRegisterEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            value={registerPassword}
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Select
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
            value={registerRole}
            onChange={(e) => setRegisterRole(e.target.value)}
            fullWidth
          >
          <MenuItem value="">Select Role</MenuItem>
          <MenuItem value="Director">Director</MenuItem>
          <MenuItem value="Department Director">Department Director</MenuItem>
          <MenuItem value="Employee">Employee</MenuItem>
        </Select>
        </FormGroup>
        <StyledButton
          variant="contained"
          color="primary"
          onClick={handleRegister}
        >
          Register
        </StyledButton>
      </FormContainer>
    </StyledContainer>
  );
};

export default AuthPage;
