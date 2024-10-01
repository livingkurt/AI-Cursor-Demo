import React from "react";
import { Box, Container, Typography, Paper, Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";

const HomePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          bgcolor: "background.default",
        }}
      >
        <Container maxWidth="md">
          <Paper elevation={3} sx={{ padding: 4, textAlign: "center" }}>
            <Typography variant="h2" component="h1" gutterBottom>
              Welcome to AI Cursor Demo
            </Typography>
            <Typography variant="h5" component="p" paragraph>
              This is a Rails app with React frontend, demonstrating the power
              of AI Cursor!
            </Typography>
            <Grid container spacing={3} justifyContent="center">
              {/* Add more content or features here */}
            </Grid>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default HomePage;
