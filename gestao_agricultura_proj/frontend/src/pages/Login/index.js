// src/LoginPage.js
import React, { Component } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Username:", this.state.username);
    console.log("Password:", this.state.password);
  };

  render() {
    return (
      <Container maxWidth="sm">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minHeight="100vh"
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Login
          </Typography>
          <form onSubmit={this.handleSubmit}>
            <TextField
              label="Username"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
              margin="normal"
              fullWidth
              required
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              margin="normal"
              fullWidth
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: "16px" }}
            >
              Login
            </Button>
          </form>
        </Box>
      </Container>
    );
  }
}