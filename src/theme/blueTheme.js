import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const blueTheme = createTheme({
  palette: {
    primary: {
      main: '#262254'
    },
    secondary: {
      main: '#F09ECE'
    },
    success: {
      main: '#2E7D32'
    },
    error: {
      main: red.A400
    },
    black: {
      main: '#1B1B1B'
    },
    whiteSmoke: {
      main: '#f5f5f5'
    }
  }
})