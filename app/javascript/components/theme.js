import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FE6B8B",
    },
    secondary: {
      main: "#FF8E53",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h2: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 500,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
          color: "#ffffff",
        },
      },
    },
  },
});

export default theme;
