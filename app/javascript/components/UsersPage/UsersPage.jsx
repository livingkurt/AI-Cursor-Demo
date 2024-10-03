import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    location: "",
    password: "",
  });
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch("/api/v1/users");
    const data = await response.json();
    setUsers(data);
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleEditInputChange = e => {
    const { name, value } = e.target;
    setEditingUser({ ...editingUser, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch("/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: newUser }),
    });
    if (response.ok) {
      fetchUsers();
      setNewUser({ name: "", email: "", location: "", password: "" });
    }
  };

  const handleUpdate = async e => {
    e.preventDefault();
    const response = await fetch(`/api/v1/users/${editingUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: editingUser }),
    });
    if (response.ok) {
      fetchUsers();
      setEditingUser(null);
    }
  };

  const startEditing = user => {
    setEditingUser({ ...user, password: "" });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "background.default", minHeight: "100vh", py: 4 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h1" gutterBottom>
            Users Management
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  {editingUser ? "Edit User" : "Create New User"}
                </Typography>
                <form onSubmit={editingUser ? handleUpdate : handleSubmit}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={editingUser ? editingUser.name : newUser.name}
                    onChange={
                      editingUser ? handleEditInputChange : handleInputChange
                    }
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={editingUser ? editingUser.email : newUser.email}
                    onChange={
                      editingUser ? handleEditInputChange : handleInputChange
                    }
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Location"
                    name="location"
                    value={
                      editingUser ? editingUser.location : newUser.location
                    }
                    onChange={
                      editingUser ? handleEditInputChange : handleInputChange
                    }
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    type="password"
                    value={
                      editingUser ? editingUser.password : newUser.password
                    }
                    onChange={
                      editingUser ? handleEditInputChange : handleInputChange
                    }
                    margin="normal"
                    required
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                  >
                    {editingUser ? "Update User" : "Create User"}
                  </Button>
                  {editingUser && (
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => setEditingUser(null)}
                      sx={{ mt: 2, ml: 2 }}
                    >
                      Cancel
                    </Button>
                  )}
                </form>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  User List
                </Typography>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Location</TableCell>
                        <TableCell>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {users.map(user => (
                        <TableRow key={user.id}>
                          <TableCell>{user.name}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>{user.location}</TableCell>
                          <TableCell>
                            <Button
                              variant="outlined"
                              color="primary"
                              onClick={() => startEditing(user)}
                            >
                              Edit
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default UsersPage;
