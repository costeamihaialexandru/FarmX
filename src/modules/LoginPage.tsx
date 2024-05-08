import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, TextField, Button } from '@mui/material';
import styled from 'styled-components';


const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme?.palette?.background?.default ?? '#f5f5f5'};
`;

const FormContainer = styled.div`
  width: 300px;
  padding: 20px;
  background-color: ${({ theme }) => theme?.palette?.background?.paper ?? '#ffffff'};
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
`;

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', {
        email,
        password
      });
      console.log(response.data);
      navigate('/dashboard');
    } catch (error) {
      console.error('Autentificarea a eșuat:', error);
    }
  };

  return (
    <StyledContainer>
      <FormContainer>
        <Typography variant="h5" gutterBottom>
          Autentificare
        </Typography>
        <FormGroup>
          <TextField
            label="Email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <TextField
            label="Parolă"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <StyledButton
          variant="contained"
          color="primary"
          onClick={handleLogin}
        >
          Autentificare
        </StyledButton>
      </FormContainer>
      <p>Nu ai un cont? <Link to="/authpage">Înregistrează-te</Link></p>
    </StyledContainer>
  );
};

export default LoginPage;
