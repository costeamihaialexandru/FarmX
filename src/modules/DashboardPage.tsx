import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const DashboardPage: React.FC = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Dashboard
      </Typography>
      <List>
        <ListItem button component={Link} to="/hr">
          <ListItemText primary="Resurse Umane" />
        </ListItem>
        {/* Alte elemente de meniu pentru alte secțiuni */}
      </List>
    </Container>
  );
};

export default DashboardPage;
