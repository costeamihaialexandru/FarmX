import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import '../styles/DashboardPage.css';

const DashboardPage: React.FC = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Dashboard
      </Typography>
      <List>
        <ListItem button component={Link} to="/form">
          <ListItemText primary="Form Page" />
        </ListItem>
        <ListItem button component={Link} to="/hr">
          <ListItemText primary="HR Page" />
        </ListItem>
        <ListItem button component={Link} to="/results">
          <ListItemText primary="Results Page" />
        </ListItem>
        <ListItem button component={Link} to="/logout">
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Container>
  );
};

export default DashboardPage;
