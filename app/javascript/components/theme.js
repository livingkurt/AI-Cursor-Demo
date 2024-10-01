import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3a3c7a",
    },
    secondary: {
      main: "#FF8E53",
    },
    background: {
      default: "#262852",
    },
    text: {
      primary: "#000",
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
          backgroundColor: "#fff",
          color: "#000",
        },
      },
    },
  },
});

export default theme;
