// Crear un tema base
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5FA8F1",
      contrastText: "#fff",
    },
    secondary: {
      main: "#335058", // Color principal
      contrastText: "#000"
    },
    error: {
      main: "#f44336", // Color de error
    },
    warning: {
      main: "#ff9800", // Color de advertencia
    },
    info: {
      main: "#2196f3", // Color de información
    },
    success: {
      main: "#4caf50", // Color de éxito
    },
  },
  typography: {
    fontFamily: '"Monserrat", sans-serif',
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    body1: {
      lineHeight: 1,
    },
    // ... otras configuraciones tipográficas
  },
  breakpoints: {
    values: {
      xs: 320,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        // Estilos para la variante "root"
        root: {
          fontSize: "1rem",
          borderRadius: "4px", // Redondear bordes
          textTransform: "none", // No transformar texto
          boxShadow: "none",
          // ... otros estilos globales para todos los botones
        },
        contained: {
          borderRadius: '30px',
        },
        text: {
          borderRadius: '30px',
          color: "#374F5B",
          padding: '0 12px',
          "&:hover": {
            boxShadow: "none",
            color: 'white',
          }
        }
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          fontSize: "1rem", // Estilo personalizado para todos los inputs
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none'
        }
      }
    }
    // ... otras sobrescrituras de estilo por componente
  },
});

// Aplicar responsiveFontSizes para ajustar el tamaño de la fuente de forma dinámica
const responsiveTheme = responsiveFontSizes(theme);

export default responsiveTheme