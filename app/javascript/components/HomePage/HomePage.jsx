import React from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import {
  Dashboard,
  People,
  Settings,
  Assignment,
  ArrowForward,
} from "@mui/icons-material";

const adminFeatures = [
  {
    title: "User Management",
    icon: <People />,
    description: "Manage user accounts and permissions",
  },
  {
    title: "Content Editor",
    icon: <Assignment />,
    description: "Edit and publish website content",
  },
  {
    title: "System Settings",
    icon: <Settings />,
    description: "Configure system-wide settings",
  },
];

const WebCraftLogo = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="40" height="40" rx="8" fill="#3a3c7a" />
    <path
      d="M10 30V10L20 20L30 10V30"
      stroke="white"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 25C15 22.2386 17.2386 20 20 20C22.7614 20 25 22.2386 25 25"
      stroke="white"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

const HomePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
        {/* Header */}
        <Box
          sx={{ bgcolor: "primary.main", color: "primary.contrastText", py: 2 }}
        >
          <Container maxWidth="lg">
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <WebCraftLogo />
              <Typography variant="h4" component="h1" sx={{ ml: 2 }}>
                WebCraft Solutions Admin
              </Typography>
            </Box>
          </Container>
        </Box>

        {/* Main Content */}
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            {/* Welcome Card */}
            <Grid item xs={12}>
              <Paper sx={{ p: 3, display: "flex", flexDirection: "column" }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  Welcome, Admin
                </Typography>
                <Typography variant="body1" paragraph>
                  Manage your website content, users, and settings from this
                  central dashboard.
                </Typography>
              </Paper>
            </Grid>

            {/* Quick Stats */}
            <Grid item xs={12} md={4}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 140,
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Total Users
                </Typography>
                <Typography component="p" variant="h4">
                  1,234
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 140,
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Published Posts
                </Typography>
                <Typography component="p" variant="h4">
                  56
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 140,
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Pending Reviews
                </Typography>
                <Typography component="p" variant="h4">
                  23
                </Typography>
              </Paper>
            </Grid>

            {/* Admin Features */}
            {adminFeatures.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card>
                  <CardContent>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      {feature.icon}
                      <Typography variant="h6" component="h3" sx={{ ml: 1 }}>
                        {feature.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2">
                      {feature.description}
                    </Typography>
                    <Button
                      variant="text"
                      color="primary"
                      endIcon={<ArrowForward />}
                      sx={{ mt: 2 }}
                    >
                      Access
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default HomePage;
