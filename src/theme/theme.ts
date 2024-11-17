import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: "'Ibarra Real Nova', serif", // Use Ibarra Real Nova as the default font
        h1: {
            fontSize: "2.5rem",
            fontWeight: 700, // Bold
        },
        h2: {
            fontSize: "2rem",
            fontWeight: 600, // Semi-Bold
        },
        h3: {
            fontSize: "1.75rem",
            fontWeight: 400, // Normal
        },
        body1: {
            fontSize: "1rem",
            fontWeight: 400,
            lineHeight: 1.6,
        },
        body2: {
            fontSize: "0.875rem",
            fontWeight: 400,
            lineHeight: 1.5,
        },
        button: {
            fontSize: "0.875rem",
            fontWeight: 600,
            textTransform: "none", // Disable uppercase for buttons
        },
    },
});

export default theme;
