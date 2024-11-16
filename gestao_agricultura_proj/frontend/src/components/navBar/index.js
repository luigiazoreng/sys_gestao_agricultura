import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#333', height: '80px' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Gestão Familiar
        </Typography>
        <Button color="inherit" component={Link} to="/">Inicio</Button>
        <Button color="inherit" component={Link} to="/login">Entrar</Button>
        <Button color="inherit" component={Link} to="/features">Funcionalidades</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;